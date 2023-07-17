interface CharacterProps {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
}

interface FilteredProps {
  allCharacter: CharacterProps[]
  getFilteredData: boolean
  selectFiltered: number
  text: string
  setGetFilteredData: React.Dispatch<React.SetStateAction<boolean>>
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
  setFilteredMode: React.Dispatch<React.SetStateAction<boolean>>
}

interface contextCharacterProps {
  characterData: {
    character: CharacterProps[]
    slicedPages: number
  }
  getNewData?: boolean
  text: string
  filteredMode?: boolean
  getFilteredData?: boolean
  filteredPages?: number
  filteredCharacterData?: {
    filteredCharacterList: CharacterProps[]
    filteredPages: number
  }
  selectFiltered?: number
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

export type { CharacterProps, FilteredProps, contextCharacterProps, infoContextProps }
