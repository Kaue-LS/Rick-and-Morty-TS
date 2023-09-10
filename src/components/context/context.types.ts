import type { CharacterProps, SwitchProps } from './character/components/types/character.types'
import type { EpisodeProps } from './episode/episode.types'
import { LocationProps } from './location/location.types'

interface contextCharacterProps {
  data: {
    character: CharacterProps[]
    pages: number
  }
  filteredCharacterData?: {
    filteredCharacterList: CharacterProps[]
    filteredPages: number
  }
  text: string
  filteredPages: number
  fetchSwitch: SwitchProps
  selectFiltered: number
  setFetchSwitch?: React.Dispatch<React.SetStateAction<SwitchProps>>
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
interface locationContextProps {
  data: {
    location: LocationProps[]
    pages: number
  }
  getNewData: boolean
  setGetNewData?: React.Dispatch<React.SetStateAction<boolean>>
}

export type {
  CharacterProps,
  contextCharacterProps,
  infoContextProps,
  episodeContextProps,
  locationContextProps,
}
