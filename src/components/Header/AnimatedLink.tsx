import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import WhitePokeballSVG from '../../../public/svg/white-pokeball.svg'
import { useRouter } from 'next/router'

export const AnimatedLink: React.FC = () => {
  const router = useRouter()
  const isHomePage = Boolean(router.pathname === '/')
  const [isShrunk, setIsShrunk] = useState(!isHomePage)

  useEffect(() => {
    if (isHomePage) {
      const timeout = setTimeout(() => {
        setIsShrunk(true)
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [isHomePage])

  return (
    <Link
      data-testid="btnAnimated"
      href="/"
      className={`${
        isShrunk ? 'btnAnimated' : 'btnAnimated-initial'
      } py-4 overflow-x-hidden px-4 bg-primary-500 rounded-full flex items-center`}
    >
      <Image
        priority
        src={WhitePokeballSVG}
        className="logo"
        alt="Pokecenter logo"
      />
      <span className="font-semibold text-xl text-white ml-4">
        Centro Pokémon
      </span>
    </Link>
  )
}

AnimatedLink.displayName = 'AnimatedLink'
export default AnimatedLink
