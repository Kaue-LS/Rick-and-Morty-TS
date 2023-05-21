import React from 'react'
import { UseContext } from '../context/getContext'
export default function SearchBar() {
  const { useDataContext } = UseContext()
  const { setStartSearch } = useDataContext
  const { text, setText } = useDataContext

  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type={'text'}
          onChange={(e) => (setText ? setText(e?.target?.value) : '')}
          placeholder='Search Character'
          value={text}
        />
        <button onClick={() => (setStartSearch ? setStartSearch(true) : null)}>Buscar</button>
      </form>
    </section>
  )
}
