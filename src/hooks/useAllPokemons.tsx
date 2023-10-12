import { Pokemon } from '@/components/FromSteps/PokemonList'
import { getAllPokemons } from '@/services/getAllPokemons'
import { formatPokemonArray } from '@/utils/formatPokemonArray'
import { useEffect, useMemo, useState } from 'react'

export const useAllPokemons = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[] | null>(null)
  const fetchAndFormatAllPokemon = async () => {
    try {
      const data = await getAllPokemons()
      if (data) {
        const formatArr = formatPokemonArray(data)
        setAllPokemons(formatArr)
      }
    } catch (error) {
      console.error('hook fetch error:', error)
    }
  }

  useEffect(() => {
    fetchAndFormatAllPokemon()
  }, [])

  return useMemo(() => allPokemons, [allPokemons])
}
