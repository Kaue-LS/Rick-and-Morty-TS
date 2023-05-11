import { useContext, createContext } from 'react'

interface contextProps {
  character: never[]
  pages: number
}

export const dataContext = createContext<contextProps>({ character: [], pages: 0 })

export function UseContext() {
  const useDataContext = useContext(dataContext)
  if (!useDataContext) throw new Error('useClient  deve ser usado dentro do Open Provider')
  return { useDataContext }
}
