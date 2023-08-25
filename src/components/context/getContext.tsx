import { createContext, useContext } from 'react'
import type { episodeContextProps, contextCharacterProps, infoContextProps } from './context.types'

export const characterContext = createContext<contextCharacterProps>({
  data: {
    character: [],
    pages: 0,
  },
  text: '',
  filteredMode: false,
  getFilteredData: false,
  filteredPages: 0,
  selectFiltered: 0,

})

export const infoContext = createContext<infoContextProps>({
  character: {
    info: {
      count: 0
    },
  },
  location: {
    info: {
      count: 0
    },
  },
  episode: {
    info: {
      count: 0
    },
  },
})

export const episodeContext = createContext<episodeContextProps>({
  data: {
    episodes: [],
    pages: 0,
  },
  getNewData: false
})

export function UseCharacterContext() {
  const useCharacterContext = useContext(characterContext)
  if (!useCharacterContext)
    throw new Error('useCharacterContext  deve ser usado dentro do Open Provider')
  return { useCharacterContext }
}
export function UseInfoContext() {
  const useInfoContext = useContext(infoContext)
  if (!useInfoContext)
    throw new Error('useInfoContext  deve ser usado dentro do Open Provider')
  return { useInfoContext }
}
export function UseEpisodeContext() {
  const useEpisodeContext = useContext(episodeContext)
  if (!useEpisodeContext)
    throw new Error('useEpisodeContext  deve ser usado dentro do Open Provider')
  return { useEpisodeContext }
}
