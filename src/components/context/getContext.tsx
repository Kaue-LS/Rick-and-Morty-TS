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
  text?: string
  setText?: React.Dispatch<React.SetStateAction<string>>
  startSearch?: boolean
  setStartSearch?: React.Dispatch<React.SetStateAction<boolean>>
  filteredPages?: number
  setFilteredPages?: React.Dispatch<React.SetStateAction<number>>
  selectFiltered?: number
  setSelectFiltered?: React.Dispatch<React.SetStateAction<number>>
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

export type { Character, contextProps }
