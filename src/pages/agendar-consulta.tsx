import React, { useMemo, useState } from 'react'
import Layout from '@/components/Layout'
import PageInfo from '@/components/PageInfo'
import { SubmitHandler, useForm } from 'react-hook-form'
import NameAndRegion from '@/components/FromSteps/NameAndRegion'
import Checkout from '@/components/FromSteps/Checkout'
import PokemonList, { Pokemon } from '@/components/FromSteps/PokemonList'
import Scheduling from '@/components/FromSteps/Scheduling'
import Feedback from '@/components/FromSteps/Feedback'

export type FormInputs = {
  name: string
  lastName: string
  region: string
  city: string
  pokemonList: Pokemon[]
  date: string
  time: string
}

const defaultValues = {
  name: '',
  lastName: '',
  region: '',
  city: '',
  pokemonList: [{ id: 1, name: '', generation: 0 }],
  date: '',
  time: '',
}

export const SchedulingPage: React.FC = () => {
  const [formFeedback, setFormFeedback] = useState<
    { status: 'success' | 'error'; data: FormInputs } | undefined
  >(undefined)

  const { register, handleSubmit, watch, setValue, reset } =
    useForm<FormInputs>({
      defaultValues,
    })

  const pokemonList = watch('pokemonList')
  const selectedRegion = watch('region')
  const selectedDate = watch('date')

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    event?.preventDefault()
    const { name, time, city, pokemonList } = data
    if (
      name === '' ||
      time === '' ||
      city === '' ||
      pokemonList[0].name === ''
    ) {
      setFormFeedback({ status: 'error', data })
      return
    }
    setFormFeedback({ status: 'success', data })
  }

  const handleResetForm = (onlyResetFeedback?: boolean) => {
    if (onlyResetFeedback) {
      setFormFeedback(undefined)
      return
    }
    reset()
    setFormFeedback(undefined)
  }

  return (
    <Layout templateTitle="Agendar Consulta">
      <PageInfo title="Agendar Consulta" />
      <main className="container mx-auto">
        <div className="pt-8 pb-16 px-2 md:px-0">
          {formFeedback ? (
            <Feedback
              handleResetForm={handleResetForm}
              status={formFeedback.status}
              data={formFeedback.data}
            />
          ) : (
            <div>
              <h1 className="font-semibold text-2xl mb-3 text-center">
                Preencha o formulário abaixo para agendar sua consulta
              </h1>
              <form
                className="max-w-lg mx-auto py-4 sm:px-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <NameAndRegion
                  register={register}
                  selectedRegion={selectedRegion}
                />
                <PokemonList setValue={setValue} pokemonList={pokemonList} />
                <Scheduling register={register} selectedDate={selectedDate} />
                <Checkout pokemonList={pokemonList} />
              </form>
            </div>
          )}
        </div>
      </main>
    </Layout>
  )
}

SchedulingPage.displayName = 'SchedulingPage'
export default SchedulingPage
