import React from 'react'
import { UseContext } from '../context/getContext'
export default function SearchBar() {
  const { useDataContext } = UseContext()
  const { text, setText } = useDataContext

  return (
    <section>
      <input
        type={'text'}
        onChange={(e) => (setText ? setText(e?.target?.value) : '')}
        placeholder='Search Character'
        value={'Rick'}
      />
    </section>
  )
}
