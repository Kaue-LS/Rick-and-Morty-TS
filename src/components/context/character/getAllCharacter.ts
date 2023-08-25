import { useCallback, useEffect, useState } from 'react'
import type { CharacterProps, GetAllCharacterProps } from './character.types'

export default function GetAllCharacter({
  getNewData,
  filteredMode,
  totalPages,
  setGetNewData,
  baseUrl,
}: GetAllCharacterProps) {
  const [allCharacter, setAllCharacter] = useState<CharacterProps[]>([])

  const fetchAllCharacter = useCallback(async () => {
    if (!getNewData && !filteredMode && totalPages > 0) {
      try {
        const allCharacter: CharacterProps[] = []

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
          allCharacter.push(...data.results) // Push individual characters into the array
        }

        setAllCharacter(allCharacter)
        setGetNewData(true)
      } catch (error) {
        // eslint-disable-next-line
        console.error('Error occurred during fetch requests:', error)
      }
    }
  }, [baseUrl, filteredMode, getNewData, setGetNewData, totalPages])

  useEffect(() => {
    fetchAllCharacter()
  }, [fetchAllCharacter])
  
  return {
    allCharacter,
  }
}
