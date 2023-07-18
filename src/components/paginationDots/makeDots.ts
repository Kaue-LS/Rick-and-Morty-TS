import { useCallback, useEffect, useState } from 'react'
export function MakeDots(pages: (number | string)[], pageSelect: number) {
  const [pageDots, setPageDots] = useState<(number | string)[]>([])

  const addDots = useCallback(() => {
    if (pages.length <= 4) setPageDots(pages)
    if (pages.length > 4) {
      let numberOfPages: (number | string)[] = [...pages]
      if (pageSelect >= 1 && pageSelect <= 3) {
        numberOfPages = [1, 2, 3, 4, '...', pages.length]
      } else if (pageSelect === 4) {
        // const sliced = pages.slice(0, 1)
        const sliced2 = pages.slice(1, 5)
        numberOfPages = [...sliced2, '...', pages.length]
      } else if (pageSelect >= 5 && pageSelect <= pages.length - 3) {
        const slicedStart = pages.slice(0, 1)
        const slicedEnd = pages.slice(pageSelect - 2, pageSelect + 1)
        numberOfPages = [...slicedStart, '...', ...slicedEnd, '...', pages.length]
      } else if (pageSelect >= pages.length - 2) {
        const sliced = pages.slice(pages.length - 4, pages.length)
        numberOfPages = [1, '...', ...sliced]
      }
      setPageDots(numberOfPages)
    }
  }, [pageSelect, pages])

  useEffect(() => {
    addDots()
  }, [addDots])
  return {
    pageDots,
  }
}

export function MakeFilteredDots(
  filteredPages: (number | string)[],
  selectFiltered: number | undefined,
) {
  const [filteredPageDots, setFilteredPageDots] = useState<(number | string)[]>([])

  const addFilteredDots = useCallback(() => {
    if (filteredPages.length > 4) {
      let numberOfPages: (number | string)[] = [...filteredPages]
      if (selectFiltered) {
        if (selectFiltered >= 1 && selectFiltered <= 3) {
          numberOfPages = [1, 2, 3, 4, '...', filteredPages.length]
        } else if (selectFiltered === 4) {
          // const sliced = filteredPages.slice(0, 1)
          const sliced2 = filteredPages.slice(1, 5)
          numberOfPages = [...sliced2, '...', filteredPages.length]
        } else if (selectFiltered >= 5 && selectFiltered <= filteredPages.length - 3) {
          const slicedStart = filteredPages.slice(0, 1)
          const slicedEnd = filteredPages.slice(selectFiltered - 2, selectFiltered + 1)
          numberOfPages = [...slicedStart, '...', ...slicedEnd, '...', filteredPages.length]
        } else if (selectFiltered >= filteredPages.length - 2) {
          const sliced = filteredPages.slice(filteredPages.length - 4, filteredPages.length)
          numberOfPages = [1, '...', ...sliced]
        }
        setFilteredPageDots(numberOfPages)
      }
    }
    setFilteredPageDots(filteredPages)
  }, [filteredPages, selectFiltered])
  useEffect(() => {
    addFilteredDots()
  }, [addFilteredDots])

  return {
    filteredPageDots,
  }
}
