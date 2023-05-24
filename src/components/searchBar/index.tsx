import React from 'react'
import { UseCharacterContext } from '../context/getContext'
export default function SearchBar() {
  const { useCharacterContext } = UseCharacterContext()
  const { setGetFilteredData, filteredMode, getNewData } = useCharacterContext
  const { text, setText } = useCharacterContext

  // eslint-disable-next-line
  console.log('teste', filteredMode, getNewData)
  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type={'text'}
          onChange={(e) => (setText ? setText(e?.target?.value) : '')}
          placeholder='Search Character'
          value={text}
        />
        <button onClick={() => setGetFilteredData && setGetFilteredData(true)}>Buscar</button>
      </form>
    </section>
  )
}
