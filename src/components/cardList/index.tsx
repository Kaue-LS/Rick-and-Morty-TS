import React from 'react'
import { UseContext } from '../context/getContext'

export default function CardList() {
  const { useDataContext } = UseContext()
  // eslint-disable-next-line
  console.log(useDataContext)
  return (
    <>
      <p>teste</p>
    </>
  )
}
