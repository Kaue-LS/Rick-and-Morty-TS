import React, { useState } from 'react'
import MobileMenuIcon from '../../assets/Icons/MenuMobile'
import Logo from '../../assets/svg/RickAndMorty-Logo.svg'
import '../styles/css/styles.css'
import SideBar from './components/modal'
export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null)

  function toggleSideBar() {
    setIsOpen(!isOpen)
  }

  return (
    <header className='e-header'>
      <nav className='e-header__nav-container'>
        <div className='e-header__nav-container__logo'>
          <img alt='Rick and Morty API' src={Logo} />
          <h1 className='heading_1'>Rick and Morty</h1>
        </div>
        <div className='e-header__nav-container__menu'>
          <MobileMenuIcon onClick={toggleSideBar} className={'MenuIconMobile'} />
        </div>
        {isOpen != null && (
          <div className={`side-bar side-bar--${isOpen ? 'isOpen' : 'isClosed'}`}>
            {<SideBar></SideBar>}
          </div>
        )}
      </nav>
    </header>
  )
}

export default NavBarMobile
