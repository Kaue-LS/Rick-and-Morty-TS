import React, { useState } from 'react'
import '../../components/styles/css/styles.css'
import CardList from '../../components/cardList'
import PaginationDots from '../../components/paginationDots'
import SearchBar from '../../components/searchBar'
import { UseCharacterContext } from '../../components/context/getContext'
import MakePages from '../../components/paginationDots/makePages'
import { MakeDots, MakeFilteredDots } from '../../components/paginationDots/makeDots'
export default function HomePage() {
  // get the current page
  const getPage = localStorage.getItem('page')?.toString()
  const numberPage = getPage ? parseInt(getPage, 10) : 1
  // get context
  const { useCharacterContext } = UseCharacterContext()
  const { data, filteredCharacterData, selectFiltered } = useCharacterContext
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



  return (
    <section className='e-home'>
      <h1 className='e-home__title'>Rick And Morty API !!!</h1>
      <SearchBar />
      <CardList />
      {useCharacterContext.setGetNewData && useCharacterContext.getNewData && useCharacterContext.setGetFilteredData && useCharacterContext.setSelectFiltered &&
        <PaginationDots
          pageSelect={pageSelect}
          setPageSelect={setPageSelect}
          setGetNewData={useCharacterContext?.setGetNewData}
          getNewData={useCharacterContext?.getNewData}
          pageDots={pageDots}
          filteredMode={useCharacterContext.filteredMode}
          filteredPageDots={filteredPageDots}
          selectFiltered={useCharacterContext.selectFiltered}
          setGetFilteredData={useCharacterContext.setGetFilteredData}
          setSelectFiltered={useCharacterContext.setSelectFiltered}
        />
      }
    </section>
  )
}
