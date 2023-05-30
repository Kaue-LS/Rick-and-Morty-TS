import { useContext, createContext } from 'react'

interface FilteredProps {
  totalPages: number
  baseUrl: string
  getFilteredData: boolean
  setGetFilteredData: React.Dispatch<React.SetStateAction<boolean>>
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
  setFilteredMode: React.Dispatch<React.SetStateAction<boolean>>
  selectFiltered: number
  text: string
}

interface CharacterProps {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
}
interface contextProps {
  characterData: {
    character: CharacterProps[]
    totalPages: number
  }
  getNewData?: boolean
  setGetNewData?: React.Dispatch<React.SetStateAction<boolean>>
  text: string
  setText?: React.Dispatch<React.SetStateAction<string>>

  filteredMode?: boolean
  setFilteredMode?: React.Dispatch<React.SetStateAction<boolean>>

  getFilteredData?: boolean
  setGetFilteredData?: React.Dispatch<React.SetStateAction<boolean>>
  filteredPages?: number
  filteredCharacterList?: CharacterProps[]
  selectFiltered?: number
  setSelectFiltered?: React.Dispatch<React.SetStateAction<number>>
}

export const characterContext = createContext<contextProps>({
  characterData: {
    character: [],
    totalPages: 0,
  },
  text: '',
})

export function UseCharacterContext() {
  const useCharacterContext = useContext(characterContext)
  if (!useCharacterContext)
    throw new Error('useCharacterContext  deve ser usado dentro do Open Provider')
  return { useCharacterContext }
}

export type { CharacterProps, contextProps, FilteredProps }
