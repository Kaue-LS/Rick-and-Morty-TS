import { useContext, createContext } from 'react'

interface FilteredProps {
  totalPages: number
  baseUrl: string
  getFilteredData: boolean
  setGetFilteredData: React.Dispatch<React.SetStateAction<boolean>>
  selectFiltered: number
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
  setGetNewData?: React.Dispatch<React.SetStateAction<boolean>>
  text?: string
  setText?: React.Dispatch<React.SetStateAction<string>>
  getFilteredData?: boolean
  setGetFilteredData?: React.Dispatch<React.SetStateAction<boolean>>
  filteredPages?: number
  filteredCharacter?: CharacterProps[]
  selectFiltered?: number
  setSelectFiltered?: React.Dispatch<React.SetStateAction<number>>
}

export const characterContext = createContext<contextProps>({
  characterData: {
    character: [],
    totalPages: 0,
  },
})

export function UseCharacterContext() {
  const useCharacterContext = useContext(characterContext)
  if (!useCharacterContext)
    throw new Error('useCharacterContext  deve ser usado dentro do Open Provider')
  return { useCharacterContext }
}

export type { CharacterProps, contextProps, FilteredProps }
