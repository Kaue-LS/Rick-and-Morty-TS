interface GetCharacterProps {
  getNewData: boolean
  baseUrl: string
  getPage?: string
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
  filteredMode: boolean
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
interface GetAllCharacterProps {
  getNewData: boolean
  filteredMode: boolean
  totalPages: number
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
  baseUrl: string
}

interface SlicePageProps {
  allCharacter: CharacterProps[]
  pageSelect: number
  itemsPerPage: number
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
export type {
  GetCharacterProps,
  FilteredProps,
  CharacterProps,
  GetAllCharacterProps,
  SlicePageProps,
}
