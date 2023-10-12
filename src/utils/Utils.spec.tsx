import { formatMoney, formatNumber } from './formatMoney'
import { formatPokemonArray } from './formatPokemonArray'
import { capitalizeFirstLetter, formatHour } from './string'

describe('formatNumber', () => {
  test('should format a number with or without trailing zeros', () => {
    expect(formatNumber(1234.567)).toBe('1.234,57')
    expect(formatNumber(1234.0)).toBe('1.234')
    expect(formatNumber(1234.0, false)).toBe('1.234,00')
  })
})

describe('formatMoney', () => {
  test('should format a number as money with or without the "R$" prefix', () => {
    expect(formatMoney(1234.567)).toBe('R$ 1.234,57')
    expect(formatMoney(1234.0)).toBe('R$ 1.234,00')
    expect(formatMoney(1234.567, false)).toBe('1.234,57')
  })
})

describe('capitalizeFirstLetter', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('test')).toBe('Test')
    expect(capitalizeFirstLetter('example')).toBe('Example')
  })
})

describe('formatHour', () => {
  test('should format the time in the format 10:30:00 to 10:30m', () => {
    expect(formatHour('10:30:00')).toBe('10:30m')
    expect(formatHour('08:15:30')).toBe('08:15m')
    expect(formatHour('12:00:00')).toBe('12:00m')
  })

  test('should not format if the time is not in the expected format', () => {
    expect(formatHour('10:30')).toBe('10:30')
    expect(formatHour('abc')).toBe('abc')
  })
})

describe('formatPokemonArray', () => {
  test('should format an array of Pokémon correctly', () => {
    const inputArray = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    ]

    const formattedArray = formatPokemonArray(inputArray)

    expect(formattedArray).toEqual([
      { id: 0, name: 'Bulbasaur', generation: 1 },
      { id: 1, name: 'Ivysaur', generation: 1 },
      { id: 2, name: 'Venusaur', generation: 1 },
    ])
  })
})
