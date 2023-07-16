import React, { ReactNode, useState } from 'react'
import { characterContext } from '../getContext'
import GetCharacter from './getCharacter'
import GetFilteredCharacter from './getFilteredCharacter'

export default function DataProvider({ children }: { children: ReactNode }) {
  const baseUrl = 'https://rickandmortyapi.com/api'
  const getPage = localStorage.getItem('page')?.toString()

  const [text, setText] = useState('')

  const [getNewData, setGetNewData] = useState(false)
  const [select, setSelect] = useState<number>(1)
  // const [selectFiltered, setSelectFiltered] = useState<number>(1)
  // const [getFilteredData, setGetFilteredData] = useState(false)
  const [filteredMode, setFilteredMode] = useState(false)

  // --------------------------------------
  const getCharacter = GetCharacter({
    baseUrl,
    getPage,
    getNewData,
    setGetNewData,
    filteredMode,
    select
  })
  const { character, slicedPages } = getCharacter

  const characterData = {
    character: character ? character : [],
    slicedPages,
  }
  // -------------------------------------
  // const { filteredCharacterList, filteredPages } = GetFilteredCharacter({
  //   totalPages,
  //   baseUrl,
  //   selectFiltered,
  //   getFilteredData,
  //   setGetFilteredData,
  //   setGetNewData,
  //   setFilteredMode,
  //   text,
  // })

  return (
    <>
      {characterData && slicedPages ? (
        <characterContext.Provider
          value={{
            characterData,
            getNewData,
            setGetNewData,
            // getFilteredData,
            text,
            filteredMode,
            // setGetFilteredData,
            // selectFiltered,
            // setSelectFiltered,
            // filteredCharacterList,
            // filteredPages,
            setText,
          }}
        >
          {children}
        </characterContext.Provider>
      ) : null}
    </>
  )
}
