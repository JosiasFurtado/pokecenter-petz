import React, { useMemo } from 'react'
import { Pokemon } from './PokemonList'
import { formatMoney } from '@/utils/formatMoney'
import PrimaryButton from '../PrimaryButton'

interface Props {
  pokemonList: Pokemon[]
  disableSubmit: boolean
}
export const Checkout: React.FC<Props> = ({ pokemonList, disableSubmit }) => {
  const values = useMemo(() => {
    const numberOfPokemons = pokemonList.length
    const generationNumbers = pokemonList.map((item) => item.generation)
    const highestGeneration =
      generationNumbers.length > 0 ? Math.max(...generationNumbers) : 0

    const tax = Math.min(0.3, 0.03 * highestGeneration)

    return {
      numberOfPokemons,
      tax: 70 * tax * numberOfPokemons,
      subtotal: numberOfPokemons * 70,
      total: numberOfPokemons * 70 * (1 + tax),
    }
  }, [pokemonList])

  return (
    <div>
      <hr className="mt-8 mb-8" />
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Número de pokémons a serem atendidos:</span>
        <span>0{values.numberOfPokemons}</span>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Atendimento unitário por pokémon: </span>
        <span>R$ 70,00</span>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Subtotal:</span>
        <span>{formatMoney(values.subtotal)}</span>
      </div>
      <div className=" mb-8">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Taxa geracional*:</span>
          <span>{formatMoney(values.tax)}</span>
        </div>
        <span className="text-xxs text-gray-600">
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </span>
      </div>
      <div className="flex items-center justify-between">
        <strong className="text-2xl font-semibold">
          Valor Total: {formatMoney(values.total)}
        </strong>
        <PrimaryButton
          label="Concluir Agendamento"
          type="submit"
          disabled={disableSubmit}
        />
      </div>
    </div>
  )
}

Checkout.displayName = 'Checkout'
export default Checkout
