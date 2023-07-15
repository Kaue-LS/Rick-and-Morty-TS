import React from 'react'
import classNames from 'classnames'
import MakePages from './makePages'
import { UseCharacterContext } from '../context/getContext'
import { MakeFilteredDots } from './makeDots'

export default function FilteredDots() {
  const { useCharacterContext } = UseCharacterContext()
  const { filteredPages } = MakePages()
  const { filteredPageDots } = MakeFilteredDots(filteredPages)
  const handlePageDotFilteredClick = (item: number | string) => {
    if (typeof item === 'number' && item !== useCharacterContext.selectFiltered) {
      const { setSelectFiltered, setGetFilteredData } = useCharacterContext
      if (setSelectFiltered && setGetFilteredData) {
        setSelectFiltered(item)
        setGetFilteredData(true)
        // localStorage.setItem('pageFiltered', item.toString())
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <section className='e-paginationDots'>
      <div className={'e-paginationDots__container'}>
        {filteredPageDots.map((item, index) => {
          return (
            <div
              className={classNames(
                item === '...' ? 'dot--string' : '',
                'e-paginationDots__container__dots',
                `pageDot${item === useCharacterContext.selectFiltered ? '--selected' : ''}`,
              )}
              key={index}
            >
              <input
                onClick={() => handlePageDotFilteredClick(item)}
                checked={item === useCharacterContext.selectFiltered}
                value={item}
                disabled={item === '...'}
                readOnly={item === '...'}
                type={'radio'}
                name={'PageDots'}
                placeholder=''
                title='number-dots'
                className={classNames(
                  'e-paginationDots__container__dots__button',
                  `pageDot${
                    item === useCharacterContext.selectFiltered ? '--selected' : '--disabled'
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
  )
}
