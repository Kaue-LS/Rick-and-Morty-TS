import { useCallback, useEffect, useState } from 'react'

export default function GetApiPage({ baseUrl }: { baseUrl: string }) {
  const [totalPages, setTotalPages] = useState(0)

  const getPagesData = useCallback(() => {
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
  }, [baseUrl])

  useEffect(() => {
    getPagesData()
  }, [getPagesData])

  return {
    totalPages,
  }
}
