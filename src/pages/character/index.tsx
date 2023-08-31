import React, { useState } from 'react'
import '../../components/styles/css/styles.css'
import CardList from '../../components/cardList/character'
import PaginationDots from '../../components/paginationDots/character'
import SearchBar from '../../components/searchBar'

export default function CharacterPage() {

  return (
    <section className='e-character'>
      <h1 className='e-character__title'>Rick And Morty API !!!</h1>
      <SearchBar />
      <CardList />
      <PaginationDots
      />
    </section>
  )
}
