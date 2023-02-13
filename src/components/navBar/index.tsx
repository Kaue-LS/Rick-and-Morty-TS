import Logo from '../../assets/svg/RickAndMorty-Logo.svg'
import '../styles/css/styles.css'

export default function NavBar() {
  return (
    <header className='e-header'>
      <nav className='e-header__nav-container'>
        <div className='e-header__nav-container__logo'>
          <img alt='Rick and Morty API' src={Logo} />
          <h1 className='heading_1'>Rick and Morty</h1>
        </div>
        <div className='e-header__nav-container__content'>
          <div className='e-header__nav-container__content__section1'>
            <h2 className='heading_2'>Todos os episódios e personagems da série até agora!</h2>
          </div>
          <div className='e-header__nav-container__content__section2'>
            <a href=''>Início</a>
            <a href=''>Personagens</a>
            <a href=''>Episódios</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
