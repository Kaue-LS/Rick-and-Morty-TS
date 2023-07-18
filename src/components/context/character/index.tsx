import React, { ReactNode, useState } from 'react'
import { characterContext } from '../getContext'
import GetCharacter from './getCharacter'
import GetFilteredCharacter from './getFilteredCharacter'

export default function DataProvider({ children }: { children: ReactNode }) {
  // base address on api
  const baseUrl = 'https://rickandmortyapi.com/api'
  // get page on localStorage
  const getPage = localStorage.getItem('page')?.toString()
  // text that is use on searchBar
  const [text, setText] = useState('')
  // switch if will fetch other characters
  const [getNewData, setGetNewData] = useState<boolean>(false)
  // if is filtered mode, searched character
  const [filteredMode, setFilteredMode] = useState<boolean>(false)
  // --------------------------------------
  // switch if will fetch the filtered characters
  const [getFilteredData, setGetFilteredData] = useState<boolean>(false)
  // the page selected of the filtered page
  const [selectFiltered, setSelectFiltered] = useState<number>(1)

  // fetch all the characters
  const { character, pages, allCharacter } = GetCharacter({
    baseUrl,
    getPage,
    getNewData,
    setGetNewData,
    filteredMode,
  })

  const data = {
    character: character ? character : [],
    pages,
  }

  const { filteredCharacterList, filteredPages } = GetFilteredCharacter({
    getFilteredData,
    allCharacter,
    selectFiltered,
    text,
    setGetFilteredData,
    setGetNewData,
    setFilteredMode,
  })

  const filteredCharacterData = {
    filteredCharacterList,
    filteredPages,
  }

  return (
    <>
      {data && pages ? (
        <characterContext.Provider
          value={{
            data,
            filteredCharacterData,
            getNewData,
            text,
            filteredMode,
            setText,
            setGetNewData,
            setGetFilteredData,
            getFilteredData,
            filteredPages,
            selectFiltered,
            setFilteredMode,
            setSelectFiltered
          }}
        >
          {children}
        </characterContext.Provider>
      ) : null}
    </>
  )
}
