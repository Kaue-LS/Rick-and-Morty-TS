import React, { ReactNode, useState } from 'react'
import { characterContext } from '../getContext'
import GetCharacter from './getCharacter'
import GetFilteredCharacter from './getFilteredCharacter'
export default function DataProvider({ children }: { children: ReactNode }) {
  const baseUrl = 'https://rickandmortyapi.com/api'
  const getPage = localStorage.getItem('page')?.toString()

  const [getNewData, setGetNewData] = useState(false)

  const getCharacter = GetCharacter({ baseUrl, getPage, getNewData, setGetNewData })
  const { character, totalPages } = getCharacter

  const characterData = {
    character: character ? character : [],
    totalPages,
  }

  const [selectFiltered, setSelectFiltered] = useState<number>(1)
  const [getFilteredData, setGetFilteredData] = useState(false)

  const { filteredCharacter, filteredPages, setText } = GetFilteredCharacter({
    totalPages,
    baseUrl,
    selectFiltered,
    getFilteredData,
    setGetFilteredData,
  })

  return (
    <>
      {characterData && totalPages ? (
        <characterContext.Provider
          value={{
            characterData,
            setGetNewData,
            getFilteredData,
            setGetFilteredData,
            selectFiltered,
            setSelectFiltered,
            filteredCharacter,
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
