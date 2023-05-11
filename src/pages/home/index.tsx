import React from 'react'
import About from './components/about/index'
import '../../components/styles/css/styles.css'
import CardList from '../../components/cardList'
import PaginationDots from '../../components/paginationDots'
export default function HomePage() {
  return (
    <section className='e-home'>
      <h1 className='e-home__title'>Rick And Morty API !!!</h1>
      <About />
      <CardList />
      <PaginationDots />
    </section>
  )
}
