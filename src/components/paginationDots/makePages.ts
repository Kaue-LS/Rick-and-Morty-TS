import { useCallback, useEffect, useState } from 'react'
import { UseCharacterContext } from '../context/getContext'

// Generate array of number of pages in agreement with the character's pages

export default function MakePages() {
  const [pages, setPages] = useState<(number | string)[]>([])
  const [filteredPages, setFilteredPages] = useState<(number | string)[]>([])

  const { useCharacterContext } = UseCharacterContext()
  const makePages = useCallback(() => {
    if (useCharacterContext.characterData.totalPages) {
      const newPages = []

      for (let i = 1; i <= useCharacterContext.characterData.totalPages; i++) {
        newPages.push(i)
      }
      setPages(newPages)
    }
    if (useCharacterContext.filteredPages) {
      const newPages = []

      for (let i = 1; i <= useCharacterContext.filteredPages; i++) {
        newPages.push(i)
      }
      setFilteredPages(newPages)
    }
  }, [useCharacterContext])

  useEffect(() => {
    makePages()
  }, [makePages])
  return {
    pages,
    filteredPages,
  }
}