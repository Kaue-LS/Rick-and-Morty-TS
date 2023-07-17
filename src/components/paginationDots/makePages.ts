import { useCallback, useEffect, useState } from 'react'
import { UseCharacterContext } from '../context/getContext'

// Generate array of number of pages in agreement with the character's pages

export default function MakePages() {
  const [pages, setPages] = useState<(number | string)[]>([])
  const [filteredPages, setFilteredPages] = useState<(number | string)[]>([])
  const { useCharacterContext } = UseCharacterContext()

  const makePages = useCallback(() => {
    if (useCharacterContext.characterData.slicedPages) {
      const newPages = []

      for (let i = 1; i <= useCharacterContext.characterData.slicedPages; i++) {
        newPages.push(i)
      }
      setPages(newPages)
    }
    if (useCharacterContext.filteredCharacterData?.filteredPages) {
      const newPages = []

      for (let i = 1; i <= useCharacterContext?.filteredCharacterData?.filteredPages; i++) {
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
