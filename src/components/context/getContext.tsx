import { useContext, createContext } from 'react'

interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
}
interface contextProps {
  character: Character[]
  pages: number
  setGetNewData?: React.Dispatch<React.SetStateAction<boolean>>
}

export const dataContext = createContext<contextProps>({
  character: [],
  pages: 0,
})

export function UseContext() {
  const useDataContext = useContext(dataContext)
  if (!useDataContext) throw new Error('useClient  deve ser usado dentro do Open Provider')
  return { useDataContext }
}
