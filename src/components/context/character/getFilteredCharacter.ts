import { useEffect, useState } from 'react'
import type { CharacterProps, FilteredProps } from '../getContext'

export default function GetFilteredCharacter({
  totalPages,
  baseUrl,
  getFilteredData,
  setGetFilteredData,
  setGetNewData,
  setFilteredMode,
  selectFiltered,
  text,
}: FilteredProps) {
  const [filteredCharacterList, setFilteredCharacterList] = useState<CharacterProps[]>([])
  const [filteredPages, setFilteredPages] = useState<number>(0)

  const itemsPerPage = 20 // Number of items per page

  useEffect(() => {
    if (getFilteredData) {
      const getFilteredCharacter = async () => {
        if (text.length > 0) {
          try {
            const getAllCharacter: CharacterProps[] = []
            // eslint-disable-next-line
            console.log('teste')
            const fetchPromises = []
            for (let i = 1; i < totalPages + 1; i++) {
              const fetchPromise = fetch(`${baseUrl}/character${`/?page=${i}`}`)
                .then((response) => {
                  if (response.ok) {
                    return response.json()
                  } else if (response.status === 404) {
                    throw new Error('Resource not found')
                  } else if (response.status === 500) {
                    throw new Error('Server error')
                  } else {
                    throw new Error('Unknown error')
                  }
                })
                .then((data) => {
                  getAllCharacter.push(...data.results) // Push individual characters into the array
                })

              fetchPromises.push(fetchPromise)
            }

            await Promise.all(fetchPromises)

            const filteredCharacter = getAllCharacter.filter((item) => {
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
            // eslint-disable-next-line
            console.log('executou aqui true')
          } catch (error) {
            Error('Error occurred during fetch requests:')
          }
        } else {
          setGetNewData(false)
          setGetFilteredData(false)
          // eslint-disable-next-line
          console.log('executou aqui false')
          setFilteredMode(false)
        }
      }
      getFilteredCharacter()
    }
  }, [
    baseUrl,
    getFilteredData,
    totalPages,
    selectFiltered,
    text,
    itemsPerPage,
    setGetFilteredData,
    setGetNewData,
    setFilteredMode,
  ])

  return {
    filteredCharacterList,
    filteredPages,
  }
}
