import React, { useState } from 'react'
import EpisodeList from '../../components/episode'
import PaginationDots from '../../components/paginationDots/episode'
export default function EpisodePage() {

  return (
    <section className='e-episode'>
      <EpisodeList />
      <PaginationDots
      />
    </section>
  )
}