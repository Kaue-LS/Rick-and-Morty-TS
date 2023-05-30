import React from 'react'
import { UseCharacterContext } from '../context/getContext'
import SearchIcon from '../../assets/Icons/Search'
export default function SearchBar() {
  const { useCharacterContext } = UseCharacterContext()
  const { setGetFilteredData } = useCharacterContext
  const { text, setText } = useCharacterContext

  return (
    <section className='e-searchBar'>
      <form className='e-searchBar__form' onSubmit={(e) => e.preventDefault()}>
        <input
          className='e-searchBar__form__input'
          type={'text'}
          onChange={(e) => (setText ? setText(e?.target?.value) : '')}
          placeholder='Search Character'
          value={text}
        />
        <button
          className='e-searchBar__form__submit'
          onClick={() => setGetFilteredData && setGetFilteredData(true)}
        >
          <SearchIcon className={'SearchIcon'} />
        </button>
      </form>
    </section>
  )
}
