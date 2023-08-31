import { SwitchProps } from '../context/character/components/types/character.types'
import type { CharacterProps } from '../context/context.types'
import { EpisodeProps } from '../context/episode/episode.types'

interface FilteredDotsProps {
  filteredPageDots?: (string | number)[]
  selectFiltered?: number
  setSelectFiltered?: React.Dispatch<React.SetStateAction<number>>
  fetchSwitch: SwitchProps
  setFetchSwitch: React.Dispatch<React.SetStateAction<SwitchProps>>
}

interface PaginationsProps extends FilteredDotsProps {
  pageSelect?: number
  getNewData?: boolean
  setPageSelect?: React.Dispatch<React.SetStateAction<number>>
  fetchSwitch: SwitchProps
  pageDots?: (string | number)[]
  filteredPageDots?: (string | number)[]
  filteredMode?: boolean
}

interface makePagesProps {
  data: {
    character?: CharacterProps[]
    pages?: number
    episodes?: EpisodeProps[]
  }
  filteredCharacterData?: {
    filteredCharacterList: CharacterProps[]
    filteredPages: number
  }
}
interface makeDotsProps {
  filteredPages: (number | string)[]
  selectFiltered: number
}

export type { makeDotsProps, PaginationsProps, FilteredDotsProps, makePagesProps }
