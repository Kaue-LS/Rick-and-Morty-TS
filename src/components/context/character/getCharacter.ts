import React, { useCallback, useEffect, useState } from 'react'
import type { CharacterProps } from '../context.types'

interface GetCharacterProps {
  getNewData: boolean
  baseUrl: string
  getPage?: string
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
  filteredMode: boolean
}

function GetCharacter({
  getNewData,
  baseUrl,
  getPage,
  setGetNewData,
  filteredMode,
}: GetCharacterProps) {
  const [character, setCharacter] = useState<CharacterProps[]>()
  const [totalPages, setTotalPages] = useState<number>(0)

  const getApiData = useCallback(() => {
    if (!getNewData && !filteredMode) {
      fetch(`${baseUrl}/character${getPage ? `/?page=${getPage}` : ''}`)
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
          setCharacter(data.results)
          setTotalPages(data.info.pages)
          setGetNewData(true)
        })
        .catch((error) => {
          Error(error.message)
        })
    }
  }, [getPage, baseUrl, getNewData, setGetNewData, filteredMode])

  useEffect(() => {
    getApiData()
  }, [getApiData])

  return {
    character,
    totalPages,
  }
}

export default GetCharacter
