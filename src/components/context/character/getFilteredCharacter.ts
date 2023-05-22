import { useCallback, useEffect, useState } from 'react'
import type { CharacterProps, FilteredProps } from '../getContext'

export default function GetFilteredCharacter({
  totalPages,
  baseUrl,
  getFilteredData,
  setGetFilteredData,
  selectFiltered,
}: FilteredProps) {
  const [filteredCharacter, setFilteredCharacter] = useState<CharacterProps[]>([])
  const [filteredPages, setFilteredPages] = useState<number>(0)
  const [text, setText] = useState('')
  const getFilteredCharacther = useCallback(() => {
    const getAllCharacter: CharacterProps[] = []
    if (getFilteredData) {
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

      Promise.all(fetchPromises)
        .then(() => {
          // At this point, all fetch requests have completed

          const filteredCharacter = getAllCharacter.filter((item) => {
            return item?.name.toLowerCase().includes(text.toLowerCase())
          })

          const itemsPerPage = 20 // Number of items per page
          const totalPages = Math.ceil(filteredCharacter.length / itemsPerPage) // Calculate the total number of pages

          // Calculate the start and end indices for the current page
          const startIndex = (selectFiltered - 1) * itemsPerPage
          const endIndex = startIndex + itemsPerPage

          // Get the items for the current page
          const currentPageItems = filteredCharacter.slice(startIndex, endIndex)

          setFilteredCharacter(currentPageItems)
          setFilteredPages(totalPages)
          setGetFilteredData(!getFilteredData)
        })
        .catch((error) => {
          Error('Error occurred during fetch requests:', error)
        })
    }
  }, [baseUrl, getFilteredData, selectFiltered, setGetFilteredData, text, totalPages])

  useEffect(() => {
    getFilteredCharacther()
  }, [getFilteredCharacther])
  return {
    filteredCharacter,
    filteredPages,
    setText,
  }
}
