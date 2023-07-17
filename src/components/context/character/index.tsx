import React, { ReactNode, useState } from 'react'
import { characterContext } from '../getContext'
import GetCharacter from './getCharacter'

export default function DataProvider({ children }: { children: ReactNode }) {
  // base address on api
  const baseUrl = 'https://rickandmortyapi.com/api'
  // get page on localStorage
  const getPage = localStorage.getItem('page')?.toString()
  // text that is use on searchBar
  const [text, setText] = useState('')
  // switch if will fetch other characters
  const [getNewData, setGetNewData] = useState(false)
  // if is filtered mode, searched character
  const [filteredMode, setFilteredMode] = useState(false)
  // --------------------------------------


  // fetch all the characters
  const { character, slicedPages } = GetCharacter({
    baseUrl,
    getPage,
    getNewData,
    setGetNewData,
    filteredMode,
  })

  const characterData = {
    character: character ? character : [],
    slicedPages,
  }
  // ---------------------------------------




  return (
    <>
      {characterData && slicedPages ? (
        <characterContext.Provider
          value={{
            characterData,
            getNewData,
            setGetNewData,
            text,
            filteredMode,
            setText,
          }}
        >
          {children}
        </characterContext.Provider>
      ) : null}
    </>
  )
}
