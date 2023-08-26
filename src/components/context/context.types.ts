import type { CharacterProps, SwitchProps } from './character/components/types/character.types'
import type { EpisodeProps } from './episode/episode.types'

interface contextCharacterProps {
  data: {
    character: CharacterProps[]
    pages: number
  }
  text: string
  filteredPages: number
  filteredCharacterData?: {
    filteredCharacterList: CharacterProps[]
    filteredPages: number
  }
  fetchSwitch: SwitchProps
  selectFiltered: number
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

interface episodeContextProps {
  data: {
    episodes: EpisodeProps[]
    pages: number
  }
  getNewData: boolean
  setGetNewData?: React.Dispatch<React.SetStateAction<boolean>>
}
export type { CharacterProps, contextCharacterProps, infoContextProps, episodeContextProps }
