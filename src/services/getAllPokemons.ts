import { APP_URL } from '@/constant/env'
import { GetPokemonsResponse } from '@/types/api'

export const getAllPokemons = async () => {
  try {
    const data: GetPokemonsResponse = await fetch(
      `${APP_URL}/api/poke/pokemons`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    ).then((response) => response.json())
    return data.results
  } catch (error) {
    console.error('Failed to fetch pokemons', error)
  }
}
