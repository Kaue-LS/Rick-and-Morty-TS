import { useEffect, useState } from 'react'
import type { CharacterProps } from '../context.types'
import type { FilteredProps } from './character.types'
export default function GetFilteredCharacter({
  getFilteredData,
  selectFiltered,
  allCharacter,
  text,
  setGetFilteredData,
  setGetNewData,
  setFilteredMode,
}: FilteredProps) {
  const [filteredCharacterList, setFilteredCharacterList] = useState<CharacterProps[]>([])
  const [filteredPages, setFilteredPages] = useState<number>(0)

  const itemsPerPage = 20 // Number of items per page

  useEffect(() => {
    if (getFilteredData) {
      const getFilteredCharacter = async () => {
        if (text.length > 0) {
          try {
            const filteredCharacter = allCharacter.filter((item) => {
              return item?.name.toLowerCase().includes(text.toLowerCase())
            })
            const pages = Math.ceil(filteredCharacter.length / itemsPerPage)
            const startIndex = (selectFiltered - 1) * itemsPerPage
            const endIndex = startIndex + itemsPerPage

            // Get the items for the current page
            const currentPageItems = filteredCharacter.slice(startIndex, endIndex)

            setFilteredCharacterList(currentPageItems)
            setFilteredPages(pages)
            setGetFilteredData(false)
            setFilteredMode(true)
          } catch (error) {
            Error('Error occurred during fetch requests:')
          }
        } else {
          localStorage.setItem('page', '1')
          setGetNewData(false)
          setGetFilteredData(false)
          setFilteredMode(false)
        }
      }
      getFilteredCharacter()
    }
  }, [
    getFilteredData,
    selectFiltered,
    allCharacter,
    text,
    itemsPerPage,
    setGetFilteredData,
    setGetNewData,
    setFilteredMode,
  ])
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
