import React from 'react'
import '../../components/styles/css/styles.css'
import CardList from '../../components/cardList/character'
import PaginationDots from '../../components/paginationDots/character'
import SearchBar from '../../components/searchBar'

export default function CharacterPage() {

  return (
    <section className='e-character'>
      <SearchBar />
      <CardList />
      <PaginationDots
      />
    </section>
  )
}
