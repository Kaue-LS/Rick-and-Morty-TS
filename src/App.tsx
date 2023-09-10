import './App.css'
import NavBar from './components/navBar'
import React from 'react'
import Routes from './routes'
import Footer from './components/footer'
function App() {
  return (
    <div className='Content'>
      <NavBar />
      <h1 className='Title'>Rick And Morty API</h1>
      <Routes />
      <Footer />
    </div>
  )
}

export default App
