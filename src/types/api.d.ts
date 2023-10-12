type ResponseBase = {
  count: number
  next: string | null
  previous: string | null
}

export interface PokemonNameAndURL {
  name: string
  url: string
}

export interface Region {
  name: string
  url: string
}

export interface City {
  name: string
  url: string
}

export type GetPokemonsResponse = ResponseBase & {
  results: PokemonNameAndURL[]
}

export type GetRegionsResponse = ResponseBase & {
  results: Region[]
}

export interface GetCitiesResponse {
  id: number
  locations: City[]
  name: string
}
