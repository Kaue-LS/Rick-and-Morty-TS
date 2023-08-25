import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CharacterPage from './pages/character'
import CharacterProvider from './components/context/character'
import EpisodeProvider from './components/context/episode'
import EpisodePage from './pages/episode'

export default function Routes() {
  const routes = [
    {
      path: '/',
      element: <CharacterPage />,
    },
    {
      path: '/episode',
      element: <EpisodePage />,
    },
  ]

  return (
    <CharacterProvider>
      <EpisodeProvider>
        <RouterProvider router={createBrowserRouter(routes)} />
      </EpisodeProvider>
    </CharacterProvider>
  )
}
