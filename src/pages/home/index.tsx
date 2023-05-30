import React from 'react'
import '../../components/styles/css/styles.css'
import CardList from '../../components/cardList'
import PaginationDots from '../../components/paginationDots'
import SearchBar from '../../components/searchBar'
export default function HomePage() {
  return (
    <section className='e-home'>
      <h1 className='e-home__title'>Rick And Morty API !!!</h1>
      <SearchBar />
      <CardList />
      <PaginationDots />
    </section>
  )
}
