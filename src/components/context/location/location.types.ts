import { SetStateAction } from 'react'

interface LocationProps {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

interface getLocationProps {
  getPage: string
  baseUrl: string
  getNewData: boolean
  setGetNewData: React.Dispatch<SetStateAction<boolean>>
}
export type { LocationProps, getLocationProps }
