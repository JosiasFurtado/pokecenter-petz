import React from 'react'

interface Props {
  className?: string
}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-secondary-500 py-6 px-2 text-center text-white text-sm">
      <h6>
        Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.
      </h6>
    </footer>
  )
}

Footer.displayName = 'Footer'
export type FooterProps = Props
export default Footer
