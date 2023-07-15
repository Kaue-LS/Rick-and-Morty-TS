import React, { ReactNode, useState } from 'react'
import { characterContext } from '../getContext'
import GetCharacter from './getCharacter'
import GetFilteredCharacter from './getFilteredCharacter'

export default function DataProvider({ children }: { children: ReactNode }) {
  const baseUrl = 'https://rickandmortyapi.com/api'
  const getPage = localStorage.getItem('page')?.toString()

  const [text, setText] = useState('')

  const [getNewData, setGetNewData] = useState(false)
  const [selectFiltered, setSelectFiltered] = useState<number>(1)
  const [getFilteredData, setGetFilteredData] = useState(false)
  const [filteredMode, setFilteredMode] = useState(false)

  const getCharacter = GetCharacter({
    baseUrl,
    getPage,
    getNewData,
    setGetNewData,
    filteredMode,
  })
  const { character, totalPages } = getCharacter

  const characterData = {
    character: character ? character : [],
    totalPages,
  }

  const { filteredCharacterList, filteredPages } = GetFilteredCharacter({
    totalPages,
    baseUrl,
    selectFiltered,
    getFilteredData,
    setGetFilteredData,
    setGetNewData,
    setFilteredMode,
    text,
  })
  return (
    <>
      {characterData && totalPages ? (
        <characterContext.Provider
          value={{
            characterData,
            getNewData,
            setGetNewData,
            getFilteredData,
            text,
            filteredMode,
            setGetFilteredData,
            selectFiltered,
            setSelectFiltered,
            filteredCharacterList,
            filteredPages,
            setText,
          }}
        >
          {children}
        </characterContext.Provider>
      ) : null}
    </>
  )
}
