import React from 'react'
import PaginationDots from '../../components/paginationDots/location'
import LocationList from '../../components/cardList/location'
import '../../components/styles/css/styles.css'

export default function LocationPage() {

    return (
        <section className='e-episode'>
            <LocationList />
            <PaginationDots
            />
        </section>
    )
}