import { createContext, useContext} from 'react'
import type { contextProps } from './context.types'

export const characterContext = createContext<contextProps>({
  characterData: {
    character: [],
    totalPages: 0,
  },
  text: '',
})


export function UseCharacterContext() {
  const useCharacterContext = useContext(characterContext)
  if (!useCharacterContext)
    throw new Error('useCharacterContext  deve ser usado dentro do Open Provider')
  return { useCharacterContext }
}

