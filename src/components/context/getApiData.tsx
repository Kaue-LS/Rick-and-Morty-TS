import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { Character, dataContext } from './getContext'
export default function DataProvider({ children }: { children: ReactNode }) {
  const baseUrl = 'https://rickandmortyapi.com/api'
  const getPage = localStorage.getItem('page')?.toString()

  const [character, setCharacter] = useState<Character[]>([])
  const [pages, setPages] = useState(0)
  const [filteredPages, setFilteredPages] = useState(0)
  const [getNewData, setGetNewData] = useState(false)
  const [text, setText] = useState('Rick')
  const [start, setStartSearch] = useState(true)

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

  const getSearchedCharacther = useCallback(() => {
    const getAllCharacter: Character[] = []
    if (start) {
      const fetchPromises = []
      for (let i = 1; i < pages + 1; i++) {
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
            // eslint-disable-next-line
            console.log('item', item.name.toLowerCase())
            // eslint-disable-next-line
            console.log('text', text)
            return item?.name.toLowerCase().includes(text.toLowerCase())
          })
          // eslint-disable-next-line
          console.log(filteredCharacter)
          setCharacter(filteredCharacter)
        })
        .catch((error) => {
          Error('Error occurred during fetch requests:', error)
        })
    }
  }, [start, pages, text])

  useEffect(() => {
    getApiData()
  }, [getApiData])
  useEffect(() => {
    getSearchedCharacther()
  }, [getSearchedCharacther])

  return (
    <>
      {character.length > 0 && pages ? (
        <dataContext.Provider
          value={{
            character,
            pages,
            setGetNewData,
            text,
            setText,
            setStartSearch,
          }}
        >
          {children}
        </dataContext.Provider>
      ) : null}
    </>
  )
}
