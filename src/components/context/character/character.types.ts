interface GetCharacterProps {
  getNewData: boolean
  baseUrl: string
  getPage?: string
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
  filteredMode: boolean
  select: number
}

export type { GetCharacterProps }
