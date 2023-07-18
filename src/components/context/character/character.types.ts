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

interface FilteredProps {
  allCharacter: CharacterProps[]
  getFilteredData: boolean
  selectFiltered: number
  text: string
  setGetFilteredData: React.Dispatch<React.SetStateAction<boolean>>
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
  setFilteredMode: React.Dispatch<React.SetStateAction<boolean>>
}
export type { GetCharacterProps, FilteredProps, CharacterProps }
