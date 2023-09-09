import React from 'react'
import { UseLocationContext } from '../../context/getContext'
import '../../styles/css/styles.css'

export default function LocationList() {
    const { useLocationContext } = UseLocationContext()
    return (
        <section className='e-locationList'>
            {useLocationContext.data.location.map((item) => (
                <div key={item.id} className='e-locationList__card'>
                    <div className='e-locationList__card__nameContainer'>
                        <h3>{item.name}</h3>
                    </div>
                    <div className='e-locationList__card__info'>
                        <label>
                            <p>Dimension:</p>
                            <span>{item.dimension}</span>
                        </label>
                        <label>
                            <p>Created:</p>
                            <span>{item.dimension}</span>
                        </label>
                        <label>
                            <p>Type:</p>
                            <span>{item.type}</span>
                        </label>
                    </div>
                </div>
            ))}
        </section>
    )
}