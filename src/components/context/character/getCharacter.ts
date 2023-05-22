import React, { useCallback, useEffect, useState } from 'react'
import type { CharacterProps } from '../getContext'

interface GetCharacterProps {
  getNewData: boolean
  baseUrl: string
  getPage?: string
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
}
export default function GetCharacter({
  getNewData,
  baseUrl,
  getPage,
  setGetNewData,
}: GetCharacterProps) {
  const [character, setCharacter] = useState<CharacterProps[]>()
  const [totalPages, setTotalPages] = useState<number>(0)
  const getApiData = useCallback(() => {
    if (!getNewData) {
      // eslint-disable-next-line
      console.log('GetCharacter')

      fetch(`${baseUrl}/character${getPage ? `/?page=${getPage}` : ''}`)
        .then((response) => {
          if (response.ok) {
            return response.json() // Retorna uma Promise resolvida com os dados JSON
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
          setGetNewData(!getNewData)
        })
        .catch((error) => {
          throw new Error(error)
        })
    }
  }, [getPage, baseUrl, getNewData, setGetNewData])

  useEffect(() => {
    getApiData()
  }, [getApiData])

  return {
    character,
    totalPages,
  }
}
