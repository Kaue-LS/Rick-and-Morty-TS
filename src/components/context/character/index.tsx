import React, { ReactNode, useState } from 'react'
import { characterContext } from '../getContext'
import GetFilteredCharacter from './components/getFiltered'
import GetApiPage from './components/getPage'
import GetAllCharacter from './components/getAllCharacter.ts'
import SlicePage from './components/slicePage'
import { CharacterProps, SwitchProps } from './components/types/character.types'

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
  const fetchSwitch: SwitchProps = {
    getNewData: false,
    filteredMode: false,
    getFilteredData: false
  }

  // --------------------------------------
  // the page selected of the filtered page
  const [selectFiltered, setSelectFiltered] = useState<number>(1)

  const pageSelect = parseInt(getPage ? getPage : '1')

  // fetch totalPages of Character's API
  const { totalPages } = GetApiPage({ baseUrl })

  // fetch all the characters
  const { allCharacter } = GetAllCharacter({
    baseUrl,
    fetchSwitch,
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
    allCharacter,
    selectFiltered,
    fetchSwitch,
    text
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
            text,
            filteredPages,
            selectFiltered,
            fetchSwitch,
            setText,
            setSelectFiltered
          }}
        >
          {children}
        </characterContext.Provider>
      ) : null}
    </>
  )
}
