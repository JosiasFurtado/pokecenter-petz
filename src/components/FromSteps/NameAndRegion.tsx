import React, { useCallback, useEffect, useState } from 'react'
import Input from '../Input'
import Select from '../Select'
import { UseFormRegister } from 'react-hook-form'
import { FormInputs } from '@/pages/agendar-consulta'
import { City, Region } from '@/types/api'
import { getAllRegions } from '@/services/getAllRegions'
import { capitalizeFirstLetter } from '@/utils/string'
import { getCitiesByRegion } from '@/services/getCitiesByRegion'

interface Props {
  register: UseFormRegister<FormInputs>
  selectedRegion?: string
}

export const NameAndRegion: React.FC<Props> = ({
  register,
  selectedRegion,
}) => {
  const [regions, setRegions] = useState<Region[] | null>(null)
  const [cities, setCities] = useState<City[] | null>(null)

  const fetchRegions = async () => {
    const data = await getAllRegions()
    if (data) setRegions(data)
  }

  const fetchCities = useCallback(async () => {
    if (!selectedRegion) return
    const data = await getCitiesByRegion(selectedRegion)
    if (data) {
      const onlyCities = data.filter((city) => city.name.includes('city'))
      const formatCityName = onlyCities.map((city) => {
        const name = city.name
          .split('-')
          .map((part) => capitalizeFirstLetter(part))
          .join(' ')
        return { ...city, name }
      })
      setCities(formatCityName)
    }
  }, [selectedRegion])

  useEffect(() => {
    fetchRegions()
  }, [])

  useEffect(() => {
    if (selectedRegion) {
      fetchCities()
      return
    }
    setCities(null)
  }, [fetchCities, selectedRegion])

  const disabledCitiesSelect = !cities || cities.length === 0

  return (
    <div className="grid grid-cols-2 gap-4 mb-10">
      <Input
        label="Nome"
        placeholder="Digite seu nome"
        {...register('name', { required: true })}
      />
      <Input
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        {...register('lastName', { required: true })}
      />

      <Select
        label="Região"
        placeholder="Selecione sua região"
        {...register('region', { required: true })}
      >
        {regions?.map((region) => (
          <option key={region.name} value={region.name}>
            {capitalizeFirstLetter(region.name)}
          </option>
        ))}
      </Select>

      <Select
        label="Cidade"
        disabled={disabledCitiesSelect}
        placeholder={
          disabledCitiesSelect ? 'Não há cidades :(' : 'Selecione sua cidade'
        }
        {...register('city', { required: true })}
      >
        {cities?.map((city) => (
          <option key={city.name} value={city.name}>
            {capitalizeFirstLetter(city.name)}
          </option>
        ))}
      </Select>
    </div>
  )
}

NameAndRegion.displayName = 'NameAndRegion'
export type NameAndRegionProps = Props
export default NameAndRegion
