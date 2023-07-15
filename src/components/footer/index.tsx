import React from 'react'
import '../styles/css/styles.css'
import ReactIcon from '../../assets/svg/ReactIcon.svg'
import TypeScriptIcon from '../../assets/svg/TypeScriptIcon.svg'
import SassIcon from '../../assets/svg/SassIcon.svg'
import CSSIcon from '../../assets/svg/CssIcon.svg'
export default function Footer() {
  return (
    <footer className='e-footer'>
      <div className='e-footer__developed'>
        <h3>Developed with:</h3>
        <div>
          <label>
            <img src={ReactIcon} alt='' />
            <span>React.JS</span>
          </label>
          <label>
            <img src={TypeScriptIcon} alt='' />
            <span>TypeScript</span>
          </label>
          <label>
            <img src={SassIcon} alt='' />
            <span>SASS</span>
          </label>
          <label>
            <img src={CSSIcon} alt='' />
            <span>CSS</span>
          </label>
        </div>
      </div>
      <div className='e-footer__info'>
        <h3>Info:</h3>
        <div>
          <label>
            <p>Character:</p>
            <span></span>
          </label>
          <label>
            <p>Episodes:</p>
            <span></span>
          </label>
          <label>
            <p>Locations:</p>
            <span></span>
          </label>
        </div>
      </div>
      <div className='e-footer__original'>
        <h3>Original:</h3>
        <a href='https://rickandmortyapi.com/'>Rick and Morty API</a>
      </div>
    </footer>
  )
}
