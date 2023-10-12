import React, { useCallback, useEffect, useState } from 'react'
import Select from '../Select'
import { UseFormRegister } from 'react-hook-form'
import { FormInputs } from '@/pages/agendar-consulta'
import { getAvailableDates } from '@/services/getAvailableDates'
import { getAvailableTime } from '@/services/getAvailableTime'
import { formatHour } from '@/utils/string'

interface Props {
  register: UseFormRegister<FormInputs>
  selectedDate?: string
}

export const Scheduling: React.FC<Props> = ({ register, selectedDate }) => {
  const [dates, setDates] = useState<string[] | null>(null)
  const [times, setTimes] = useState<string[] | null>(null)

  const fetchDates = async () => {
    const data = await getAvailableDates()
    if (data) setDates(data)
  }

  const fetchTimes = useCallback(async () => {
    if (!selectedDate) return
    const data = await getAvailableTime(selectedDate)
    if (data) setTimes(data)
  }, [selectedDate])

  useEffect(() => {
    fetchDates()
  }, [])

  useEffect(() => {
    if (selectedDate) {
      fetchTimes()
    }
  }, [fetchTimes, selectedDate])

  const disabledTimeSelect = !times || times.length === 0

  return (
    <div className="grid grid-cols-2 gap-4 mb-10">
      <Select
        label="Data para Atendimento"
        placeholder="Selecione uma data"
        {...register('date')}
      >
        {dates?.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </Select>

      <Select
        label="Horário de Atendimento"
        disabled={disabledTimeSelect}
        placeholder={
          disabledTimeSelect ? 'Selecione uma data' : 'Selecione um horário'
        }
        {...register('time')}
      >
        {times?.map((time) => (
          <option key={time} value={time}>
            {formatHour(time)}
          </option>
        ))}
      </Select>
    </div>
  )
}

Scheduling.displayName = 'Scheduling'
export type SchedulingProps = Props
export default Scheduling
