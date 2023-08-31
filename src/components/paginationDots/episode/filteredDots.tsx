import React from 'react'
import classNames from 'classnames'
import type { FilteredDotsProps } from '../paginations.types'

export default function FilteredDots({ filteredPageDots, fetchSwitch, setSelectFiltered, setFetchSwitch, selectFiltered }: FilteredDotsProps) {

  const handlePageDotFilteredClick = (item: number | string) => {
    if (typeof item === 'number' && item !== selectFiltered) {
      if (setSelectFiltered && fetchSwitch.getFilteredData) {
        setSelectFiltered(item)
        setFetchSwitch((rest) => ({
          ...rest,
          getFilteredData: true
        }))
        // localStorage.setItem('pageFiltered', item.toString())
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      }
    }
  }

  return filteredPageDots ? (
    <section className='e-paginationDots'>
      <div className={'e-paginationDots__container'}>
        {filteredPageDots.map((item, index) => {
          return (
            <div
              className={classNames(
                item === '...' ? 'dot--string' : '',
                'e-paginationDots__container__dots',
                `pageDot${item === selectFiltered ? '--selected' : ''}`,
              )}
              key={index}
            >
              <input
                onClick={() => handlePageDotFilteredClick(item)}
                checked={item === selectFiltered}
                value={item}
                disabled={item === '...'}
                readOnly={item === '...'}
                type={'radio'}
                name={'PageDots'}
                placeholder=''
                title='number-dots'
                className={classNames(
                  'e-paginationDots__container__dots__button',
                  `pageDot${item === selectFiltered ? '--selected' : '--disabled'
                  }`,
                  item === '...' ? 'pageDot--string' : '',
                )}
              />
              <span className='e-paginationDots__container__dots__number'>{item}</span>
            </div>
          )
        })}
      </div>
    </section>
  ) : null
}
