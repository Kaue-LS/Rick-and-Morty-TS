import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { dataContext } from './getContext'

export default function DataProvider({ children }: { children: ReactNode }) {
  const baseUrl = 'https://rickandmortyapi.com/api'

  const [character, setCharacter] = useState<never[]>([])
  const [pages, setPages] = useState(0)
  const getPage = localStorage.getItem('page')?.toString()
  const [getNewData, setGetNewData] = useState(false)
  const getApiData = useCallback(() => {
    if (!getNewData) {
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
          setPages(data.info.pages)
          setGetNewData(!getNewData)
        })
        .catch((error) => {
          throw new Error(error)
        })
    }
  }, [getPage, getNewData])

  useEffect(() => {
    getApiData()
  }, [getApiData])

  return (
    <>
      {character.length > 0 && pages ? (
        <dataContext.Provider
          value={{
            character,
            pages,
            setGetNewData,
          }}
        >
          {children}
        </dataContext.Provider>
      ) : null}
    </>
  )
}
