interface GetCharacterProps {
  getNewData: boolean
  baseUrl: string
  getPage?: string
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
  filteredMode: boolean
}

export type { GetCharacterProps }
