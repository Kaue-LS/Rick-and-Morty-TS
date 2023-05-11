import React, { useCallback, useEffect, useState } from 'react'
import { UseContext } from '../context/getContext'

export default function PaginationDots() {
  const { useDataContext } = UseContext()
  const [pages, setPages] = useState<number[]>([])
  const makePages = useCallback(() => {
    const newPages = []
    for (let i = 1; i <= useDataContext.pages; i++) {
      newPages.push(i)
    }
    setPages(newPages)
  }, [useDataContext.pages])

  useEffect(() => {
    if (useDataContext) makePages()
  }, [makePages, useDataContext])

  // eslint-disable-next-line
  console.log({ pages })

  return (
    pages && (
      <div>
        {pages.map((item) => (
          <div key={item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    )
  )
}
