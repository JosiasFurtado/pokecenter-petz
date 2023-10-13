import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Image from 'next/image'
import { FormInputs } from '@/pages/agendar-consulta'
import { formatHour } from '@/utils/string'

interface Props {
  status: 'success' | 'error'
  data: FormInputs
  handleResetForm: () => void
}

export const Feedback: React.FC<Props> = ({
  status,
  data,
  handleResetForm,
}) => {
  const isSuccess = status === 'success'
  const message = isSuccess
    ? `Seu agendamento para dia ${data.date}, às ${formatHour(data.time)}, para 
  ${data.pokemonList.length} pokémon${
        data.pokemonList.length > 1 ? 's' : ''
      } foi realizado com sucesso!`
    : 'Preencha todos os campos para concluir seu agendamento.'

  return (
    <div className="flex flex-col my-36 pt-5 pb-8 bg-primary-100 border mx-auto border-primary-400 rounded-lg items-center justify-center max-w-md px-6">
      <h1 className="font-bold text-xl mb-4 text-center">
        {isSuccess ? 'Consulta Agendada' : 'Houve um problema no agendamento'}
      </h1>
      {isSuccess ? (
        <Image
          priority
          src="/svg/check.svg"
          width={42}
          height={42}
          className="mb-4"
          alt="success icon"
        />
      ) : (
        <Image
          priority
          src="/svg/warning.svg"
          width={42}
          height={42}
          className="mb-4"
          alt="success icon"
        />
      )}
      <p className="mb-5 text-sm text-gray-600 text-center">{message}</p>
      <PrimaryButton
        label="Fazer Novo Agendamento"
        onClick={() => handleResetForm()}
        type="button"
      />
    </div>
  )
}

Feedback.displayName = 'Feedback'
export type FeedbackProps = Props
export default Feedback
