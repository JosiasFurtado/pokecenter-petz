import Link from 'next/link'
import React from 'react'

interface Props {
  className?: string
  title: string
}

export const PageInfo: React.FC<Props> = ({ title }) => {
  return (
    <section className="bg-primary-500">
      <div className="container px-4 sm:px-8 mx-auto text-white py-8">
        <div className="flex items-center mb-2">
          <Link href="/" className="text-xs mr-1">
            Home
          </Link>
          <small className="font-thin">&gt;</small>
          <span className="text-xs text-gray-50 ml-1">{title}</span>
        </div>
        <h1 className="font-bold text-4xl mb-2">{title}</h1>
        <p className="text-sml text-gray-50">
          A maior rede de tratamento pokémon.
        </p>
      </div>
    </section>
  )
}

PageInfo.displayName = 'PageInfo'
export type PageInfoProps = Props
export default PageInfo
