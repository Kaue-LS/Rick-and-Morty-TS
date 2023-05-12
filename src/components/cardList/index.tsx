import React from 'react'
import { UseContext } from '../context/getContext'

export default function CardList() {
  const { useDataContext } = UseContext()
  const { character } = useDataContext
  return (
    <section>
      <div>
        {character.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img alt={item.name} loading={'lazy'} src={item.image} />
              </div>
              <label>Name:</label>
              <span>{item.name}</span>
              <label>Gender:</label>
              <span>{item.gender}</span>
              <label>Type:</label>
              <span>{item.type}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
