import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'
import AnimatedLink from './AnimatedLink'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = () => {
  return (
    <header className="bg-white py-6 px-2 container mx-auto flex justify-between items-center">
      <AnimatedLink />
      <div>
        <Link href="/quem-somos" className="text-sm mr-3 sm:mr-7">
          Quem Somos
        </Link>
        <PrimaryButton
          asLink
          href="/agendar-consulta"
          label="Agendar Consulta"
        />
      </div>
    </header>
  )
}

Header.displayName = 'Header'
export type HeaderProps = Props
export default Header
