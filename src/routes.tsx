import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DataProvider from './components/context/character'
import CharacterDesc from './components/info/character'
import CharacterPage from './pages/character'

export default function Routes() {
  const routes = [
    {
      path: '/',
      element: <CharacterPage />,
    },
    {
      path: 'character/:characterId',
      element: <CharacterDesc />
    }
  ]

  return (
    <DataProvider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </DataProvider>
  )
}
