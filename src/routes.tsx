import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home'
import DataProvider from './components/context/character'

export default function Routes() {
  const routes = [
    {
      path: '/',
      element: <HomePage />,
    },
  ]

  return (
    <DataProvider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </DataProvider>
  )
}
