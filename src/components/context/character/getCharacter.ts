import { useCallback, useEffect, useState } from 'react'
import type { CharacterProps } from '../context.types'
import { GetCharacterProps } from './character.types'

function GetCharacter({
  getNewData,
  baseUrl,
  setGetNewData,
  filteredMode,
  select,
}: GetCharacterProps) {
  const [character, setCharacter] = useState<CharacterProps[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const [slicedPages, setSlicedPages] = useState<number>(0)
  const itemsPerPage = 20 // Number of items per page

  const getApiData = useCallback(() => {
    if (!getNewData && !filteredMode) {
      fetch(`${baseUrl}/character`)
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else if (response.status === 404) {
            throw new Error('Recurso não encontrado')
          } else if (response.status === 500) {
            throw new Error('Erro do servidor')
          } else {
            throw new Error('Erro desconhecido')
          }
        })
        .then((data) => {
          setTotalPages(data.info.pages)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    }
  }, [baseUrl, getNewData, filteredMode])

  const getAllCharacter = useCallback(async () => {
    try {
      const getAllCharacter: CharacterProps[] = []

      for (let i = 1; i <= totalPages; i++) {
        const response = await fetch(`${baseUrl}/character${`/?page=${i}`}`)
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Resource not found')
          } else if (response.status === 500) {
            throw new Error('Server error')
          } else {
            throw new Error('Unknown error')
          }
        }
        const data = await response.json()
        getAllCharacter.push(...data.results) // Push individual characters into the array
      }

      const pages = Math.ceil(getAllCharacter.length / itemsPerPage)
      const startIndex = (select - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage

      // Get the items for the current page
      const currentPageItems = getAllCharacter.slice(startIndex, endIndex)
      setCharacter(currentPageItems)
      setSlicedPages(pages)
      setGetNewData(true)
    } catch (error) {
      // eslint-disable-next-line
      console.error('Error occurred during fetch requests:', error)
    }
  }, [baseUrl, setGetNewData, select, totalPages])

  useEffect(() => {
    getApiData()
  }, [getApiData])

  useEffect(() => {
    if (totalPages > 0) {
      getAllCharacter()
    }
  }, [getAllCharacter, totalPages])

  return {
    character,
    slicedPages,
  }
}

export default GetCharacter
