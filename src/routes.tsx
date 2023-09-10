import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CharacterPage from './pages/character'
import CharacterProvider from './components/context/character'
import EpisodeProvider from './components/context/episode'
import EpisodePage from './pages/episode'
import LocationPage from './pages/location'
import LocationProvider from './components/context/location'

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
    {
      path: '/location',
      element: <LocationPage />,
    },
  ]

  return (
    <CharacterProvider>
      <EpisodeProvider>
        <LocationProvider>
          <RouterProvider router={createBrowserRouter(routes)} />
        </LocationProvider>
      </EpisodeProvider>
    </CharacterProvider>
  )
}
