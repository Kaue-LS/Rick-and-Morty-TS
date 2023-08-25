import React from 'react'
export default function SideBar() {
  return (
    <div className='modalMenu'>
      <a className='modalMenu__itemLink' href='/'>
        Character
      </a>
      <a className='modalMenu__itemLink' href='/'>
        Episode
      </a>
      <a className='modalMenu__itemLink' href='/location'>
        Location
      </a>
    </div>
  )
}
