import React, { ReactNode, useState } from 'react'
import { characterContext } from '../getContext'
import GetFilteredCharacter from './getFilteredCharacter'
import GetApiPage from './getPage'
import GetAllCharacter from './getAllCharacter'
import SlicePage from './slicePage'
import { CharacterProps } from './character.types'

export default function CharacterProvider({ children }: { children: ReactNode }) {
  // base address on api
  const baseUrl = 'https://rickandmortyapi.com/api'
  // total of items on each page
  const itemsPerPage = 20
  // get page on localStorage
  const getPage = localStorage.getItem('pageCharacter')?.toString()
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

  const pageSelect = parseInt(getPage ? getPage : '1')

  // fetch totalPages of Character's API
  const { totalPages } = GetApiPage({ baseUrl })

  // fetch all the characters
  const { allCharacter } = GetAllCharacter({
    baseUrl,
    getNewData,
    setGetNewData,
    filteredMode,
    totalPages
  })


  let character: CharacterProps[] = [];
  let pages = 0;

  if (allCharacter.length) {
    const result = SlicePage({
      allCharacter,
      itemsPerPage,
      pageSelect
    });
    character = result.character;
    pages = result.pages;
  }
  const data = {
    character: character,
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
      {character.length && pages ? (
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
