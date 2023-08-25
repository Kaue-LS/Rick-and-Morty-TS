import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import FilteredDots from './filteredDots'
import { UseCharacterContext } from '../../context/getContext'
import MakePages from '../makePages'
import { MakeDots, MakeFilteredDots } from '../makeDots'

export default function PaginationDots() {
  // get the current page
  const getPage = localStorage.getItem('pageCharacter')?.toString()
  const numberPage = getPage ? parseInt(getPage, 10) : 1
  // get context
  const { useCharacterContext } = UseCharacterContext()
  const { data, filteredCharacterData, selectFiltered, getNewData, setGetNewData, filteredMode, setGetFilteredData, setSelectFiltered } = useCharacterContext
  // getPages Filtered
  const { pages, filteredPages } = MakePages({
    data,
    filteredCharacterData
  }
  )
  // Add selectedPage on useState
  const [pageSelect, setPageSelect] = useState<number>(numberPage ? numberPage : 1)
  // makeDots
  const { pageDots } = MakeDots(pages, pageSelect)
  const { filteredPageDots } = MakeFilteredDots(filteredPages, selectFiltered)
  // Add number to localStorage and change the items per page
  const handlePageDotClick = useCallback(
    (item: number | string) => {
      if (typeof item === 'number' && item !== pageSelect) {
        if (setPageSelect)
          setPageSelect(item)

        localStorage.setItem('pageCharacter', item.toString())
        if (getNewData && setGetNewData) setGetNewData(false)
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      }
    },
    [pageSelect, getNewData, setPageSelect, setGetNewData],
  )

  return (
    <>
      {!filteredMode && pageDots && (
        <section className='e-paginationDots'>
          <div className={'e-paginationDots__container'}>
            {pageDots.map((item, index) => {
              return (
                <div
                  className={classNames(
                    item === '...' ? 'dot--string' : '',
                    'e-paginationDots__container__dots',
                    `pageDot${item === pageSelect ? '--selected' : ''}`,
                  )}
                  key={index}
                >
                  <input
                    onClick={() => handlePageDotClick(item)}
                    checked={item === pageSelect}
                    value={item}
                    disabled={item === '...'}
                    readOnly={item === '...'}
                    type={'radio'}
                    name={'PageDots'}
                    placeholder=''
                    title='number-dots'
                    className={classNames(
                      'e-paginationDots__container__dots__button',
                      `pageDot${item === pageSelect ? '--selected' : '--disabled'}`,
                      item === '...' ? 'pageDot--string' : '',
                    )}
                  />
                  <span className='e-paginationDots__container__dots__number'>{item}</span>
                </div>
              )
            })}
          </div>
        </section>
      )}
      {filteredMode && <FilteredDots selectFiltered={selectFiltered} setGetFilteredData={setGetFilteredData} setSelectFiltered={setSelectFiltered} filteredPageDots={filteredPageDots} />}

    </>
  )
}
