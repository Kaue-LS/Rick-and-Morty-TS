import { createContext, useContext } from 'react'
import type { contextCharacterProps, infoContextProps } from './context.types'

export const characterContext = createContext<contextCharacterProps>({
  characterData: {
    character: [],
    totalPages: 0,
  },
  text: '',
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

