import type { CharacterProps } from '../context/context.types'

interface FilteredDotsProps {
  filteredPageDots: (string | number)[]
  selectFiltered: number
  setSelectFiltered: React.Dispatch<React.SetStateAction<number>>
  setGetFilteredData: React.Dispatch<React.SetStateAction<boolean>>
}

interface PaginationsProps extends FilteredDotsProps {
  pageSelect: number
  getNewData: boolean
  setPageSelect: React.Dispatch<React.SetStateAction<number>>
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
  pageDots: (string | number)[]
  filteredPageDots: (string | number)[]
  filteredMode: boolean
}

interface makePagesProps {
  data: {
    character: CharacterProps[]
    pages: number
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
