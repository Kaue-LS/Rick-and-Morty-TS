import { useCallback, useEffect, useState } from 'react'
import { LocationProps, getLocationProps } from './location.types'

export default function GetLocation({
  getPage,
  baseUrl,
  getNewData,
  setGetNewData,
}: getLocationProps) {
  const [totalPages, setTotalPages] = useState<number>(0)
  const [pages, setPages] = useState<number>(0)
  const [location, setLocation] = useState<LocationProps[]>([])
  const pageSelect = parseInt(getPage ? getPage : '')
  const itemsPerPage = 20
  const getApiData = useCallback(() => {
    fetch(`${baseUrl}/location`)
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
  }, [baseUrl])

  const getAllEpisode = useCallback(async () => {
    if (!getNewData) {
      try {
        const getAllEpisode: LocationProps[] = []

        for (let i = 1; i <= totalPages; i++) {
          const response = await fetch(`${baseUrl}/location${`/?page=${i}`}`)
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
          getAllEpisode.push(...data.results) // Push individual characters into the array
        }

        const pages = Math.ceil(getAllEpisode.length / itemsPerPage)
        const startIndex = (pageSelect - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        // Get the items for the current page
        const currentPageItems = getAllEpisode.slice(startIndex, endIndex)
        setLocation(currentPageItems)
        setPages(pages)
        setGetNewData(true)
      } catch (error) {
        // eslint-disable-next-line
        console.error('Error occurred during fetch requests:', error)
      }
    }
  }, [baseUrl, setGetNewData, pageSelect, totalPages, getNewData])

  useEffect(() => {
    getApiData()
  }, [getApiData])

  useEffect(() => {
    if (totalPages > 0 && totalPages) {
      getAllEpisode()
    }
  }, [location, totalPages, getAllEpisode])

  return {
    location,
    pages,
  }
}
