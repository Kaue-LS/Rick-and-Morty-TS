interface SwitchProps {
  getNewData: boolean
  filteredMode: boolean
  getFilteredData: boolean
}
interface GetCharacterProps extends SwitchProps {
  baseUrl: string
  getPage?: string
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
  totalPages: number
  baseUrl: string
  fetchSwitch: SwitchProps
}

interface SlicePageProps {
  allCharacter: CharacterProps[]
  pageSelect: number
  itemsPerPage: number
}
interface FilteredProps {
  allCharacter: CharacterProps[]
  selectFiltered: number
  text: string
  fetchSwitch: SwitchProps
}
export type {
  SwitchProps,
  GetCharacterProps,
  FilteredProps,
  CharacterProps,
  GetAllCharacterProps,
  SlicePageProps,
}
