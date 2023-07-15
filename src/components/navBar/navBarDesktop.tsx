import React from 'react'
import Logo from '../../assets/svg/RickAndMorty-Logo.svg'
import '../styles/css/styles.css'
export const NavBarDesktop = () => {
  return (
    <header className='e-header'>
      <nav className='e-header__nav-container'>
        <div className='e-header__nav-container__logo'>
          <img alt='Rick and Morty API' src={Logo} />
          <h2 className='heading_2'>Rick and Morty</h2>
        </div>
        <div className='e-header__nav-container__content'>
          <div className='e-header__nav-container__content__section1'>
            <h2 className='heading_2'>Todos os episódios e personagems da série até agora!</h2>
          </div>
          <div className='e-header__nav-container__content__section2'>
            <a href='/'>Início</a>
            <a href='/'>Episódios</a>
            <a href='/'>Sobre</a>

          </div>
        </div>
      </nav>
    </header>
  )
}
export default NavBarDesktop
