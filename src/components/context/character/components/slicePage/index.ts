import type { SlicePageProps } from '../types/character.types'

export default function SlicePage({ allCharacter, pageSelect, itemsPerPage }: SlicePageProps) {
  const pages = Math.ceil(allCharacter.length / itemsPerPage)
  const startIndex = (pageSelect - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  // Get the items for the current page
  const character = allCharacter.slice(startIndex, endIndex)

  return {
    character,
    pages,
  }
}
