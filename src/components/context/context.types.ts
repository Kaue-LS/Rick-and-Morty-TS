import type { CharacterProps } from './character/character.types'

interface contextCharacterProps {
  data: {
    character: CharacterProps[]
    pages: number
  }
  getNewData?: boolean
  text: string
  filteredMode: boolean
  getFilteredData: boolean
  filteredPages: number
  filteredCharacterData?: {
    filteredCharacterList: CharacterProps[]
    filteredPages: number
  }
  selectFiltered: number
  setGetNewData?: React.Dispatch<React.SetStateAction<boolean>>
  setGetFilteredData?: React.Dispatch<React.SetStateAction<boolean>>
  setFilteredMode?: React.Dispatch<React.SetStateAction<boolean>>
  setText?: React.Dispatch<React.SetStateAction<string>>
  setSelectFiltered?: React.Dispatch<React.SetStateAction<number>>
}

interface infoContextProps {
  character: {
    info: {
      count: number
    }
  }
  location: {
    info: {
      count: number
    }
  }
  episode: {
    info: {
      count: number
    }
  }
}

export type { CharacterProps, contextCharacterProps, infoContextProps }
