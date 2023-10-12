import React from 'react'
import Select from '../Select'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { FormInputs } from '@/pages/agendar-consulta'
import { useAllPokemons } from '@/hooks/useAllPokemons'

export interface Pokemon {
  id: number
  name: string
  generation: number
}

interface Props {
  setValue: UseFormSetValue<FormInputs>
  pokemonList: Pokemon[]
}

export const PokemonList: React.FC<Props> = ({ setValue, pokemonList }) => {
  const allPokemons = useAllPokemons()

  const onSelectPokemon = (pokemon: Pokemon, id: number) => {
    const listFilter = pokemonList.filter((item) => item.id !== id + 1)
    const newArr = [
      ...listFilter,
      {
        id: id + 1,
        name: pokemon.name,
        generation: pokemon.generation,
      },
    ].sort((a, b) => a.id - b.id)
    setValue('pokemonList', newArr)
  }

  const handleAddPokemon = () => {
    setValue('pokemonList', [
      ...pokemonList,
      { id: pokemonList.length + 1, name: '', generation: 0 },
    ])
  }

  return (
    <div className="mb-10">
      <h5 className="text-xs font-bold mb-1">Cadastre seu time</h5>
      <h6 className="text-xs font-medium text-gray-600 mb-4">
        Atendemos até 06 pokémons por vez
      </h6>
      <div>
        {allPokemons &&
          pokemonList.map((item, index) => {
            const nameAndLabel = `Pokemon 0${index + 1}`
            return (
              <Select
                key={index}
                label={nameAndLabel}
                name={nameAndLabel}
                flexrow
                placeholder="Selecione seu pokémon"
                value={item.name}
                className="mb-4"
                onChange={(e) =>
                  onSelectPokemon(
                    allPokemons[e.target.selectedIndex - 1],
                    index
                  )
                }
              >
                {allPokemons.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Select>
            )
          })}
        {pokemonList.length < 6 && (
          <button
            type="button"
            onClick={handleAddPokemon}
            className="border border-gray-800 text-gray-800 rounded-full px-4 py-3 text-xs font-bold hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            Adicionar novo pokémon ao time <strong className="ml-2">+</strong>
          </button>
        )}
      </div>
    </div>
  )
}

PokemonList.displayName = 'PokemonList'
export type PokemonListProps = Props
export default PokemonList
