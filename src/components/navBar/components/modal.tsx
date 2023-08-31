import React from 'react'
export default function SideBar() {
  return (
    <div className='modalMenu'>
      <a rel='noreferrer' className='modalMenu__itemLink' href='/'>
        Character
      </a>
      <a rel='noreferrer' className='modalMenu__itemLink' href='/episode'>
        Episode
      </a>
      <a rel='noreferrer' className='modalMenu__itemLink' href='/location'>
        Location
      </a>
    </div>
  )
}
