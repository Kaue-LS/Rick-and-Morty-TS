import { useCallback, useEffect, useState } from 'react'
import type { makePagesProps } from './paginations.types'

// Generate array of number of pages in agreement with the character's pages

export default function MakePages({ data, filteredCharacterData }: makePagesProps) {
  const [pages, setPages] = useState<(number | string)[]>([])
  const [filteredPages, setFilteredPages] = useState<(number | string)[]>([])

  const makePages = useCallback(() => {
    if (data.pages) {
      const newPages = []

      for (let i = 1; i <= data.pages; i++) {
        newPages.push(i)
      }
      setPages(newPages)
    }
    if (filteredCharacterData?.filteredPages) {
      const newPages = []

      for (let i = 1; i <= filteredCharacterData?.filteredPages; i++) {
        newPages.push(i)
      }
      setFilteredPages(newPages)
    }
  }, [data.pages, filteredCharacterData])

  useEffect(() => {
    makePages()
  }, [makePages])
  return {
    pages,
    filteredPages,
  }
}
