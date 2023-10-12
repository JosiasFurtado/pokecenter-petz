import { Pokemon } from '@/components/FromSteps/PokemonList'
import { PokemonNameAndURL } from '@/types/api'
import { capitalizeFirstLetter } from './string'

export const formatPokemonArray = (
  pokemonArray: PokemonNameAndURL[]
): Pokemon[] => {
  return pokemonArray.map((pokemon, index) => {
    let generation = 1

    if (index >= 151 && index < 251) {
      generation = 2
    } else if (index >= 251 && index < 386) {
      generation = 3
    } else if (index >= 386 && index < 493) {
      generation = 4
    } else if (index >= 493 && index < 649) {
      generation = 5
    }

    return {
      id: index,
      name: capitalizeFirstLetter(pokemon.name),
      generation,
    }
  })
}
