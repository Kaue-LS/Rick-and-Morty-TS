interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
}
interface GetEpisodeProps {
  getPage: string
  baseUrl: string
  getNewData: boolean
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>
}
export type { EpisodeProps, GetEpisodeProps }
