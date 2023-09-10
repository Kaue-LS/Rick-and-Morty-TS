import React, { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CharacterPage from './pages/character'

import EpisodePage from './pages/episode'
import LocationPage from './pages/location'
import Loading from './components/loading/Index'


const CharacterProvider = lazy(() => import('./components/context/character'))
const EpisodeProvider = lazy(() => import('./components/context/episode'))
const LocationProvider = lazy(() => import('./components/context/location'))

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
    <Suspense fallback={<Loading />}>
      <CharacterProvider>
        <EpisodeProvider>
          <LocationProvider>
            <RouterProvider router={createBrowserRouter(routes)} />
          </LocationProvider>
        </EpisodeProvider>
      </CharacterProvider>
    </Suspense>
  )
}
