import { useEffect, useState } from 'react'
import type { FilteredProps, CharacterProps } from '../types/character.types'
import SlicePage from '../slicePage'
export default function GetFilteredCharacter({
  selectFiltered,
  allCharacter,
  fetchSwitch,
  text,
}: FilteredProps) {
  const [filteredCharacterList, setFilteredCharacterList] = useState<CharacterProps[]>([])
  const [filteredPages, setFilteredPages] = useState<number>(0)

  const itemsPerPage = 20 // Number of items per page

  useEffect(() => {
    if (fetchSwitch.getFilteredData) {
      const getFilteredCharacter = async () => {
        if (text.length > 0) {
          try {
            const filteredCharacter = allCharacter.filter((item) => {
              return item?.name.toLowerCase().includes(text.toLowerCase())
            })
            if (filteredCharacter.length) {
              const { character, pages } = SlicePage({
                allCharacter,
                itemsPerPage,
                pageSelect: 1,
              })
              setFilteredCharacterList(character)
              setFilteredPages(pages)
            } else {
              setFilteredCharacterList([])
              setFilteredPages(0)
            }
          } catch (error) {
            Error('Error occurred:' + error)
          }
        } else {
          localStorage.setItem('page', '1')
        }
      }
      getFilteredCharacter()
    }
  }, [fetchSwitch, selectFiltered, allCharacter, text, itemsPerPage])
  if (!filteredCharacterList || !filteredPages) {
    return {
      filteredCharacterList: [],
      filteredPages: 0,
    }
  }

  return {
    filteredCharacterList,
    filteredPages,
  }
}
