import React from 'react'
import { render, screen, act } from '@testing-library/react'
import AnimatedLink from './AnimatedLink'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/' })),
}))

jest.mock('next/image', () => {
  return {
    __esModule: true,
    default: () => {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src="fake-image-src" alt="Pokecenter logo" />
    },
  }
})

describe('<AnimatedLink />', () => {
  it('should render the component initially without being shrunken', () => {
    render(<AnimatedLink />)
    const textElement = screen.getByText('Centro Pokémon')
    expect(textElement).toBeInTheDocument()
  })

  it('should render the shrunken component after 5 seconds', async () => {
    jest.useFakeTimers()
    render(<AnimatedLink />)

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    const linkElement = screen.getByTestId('btnAnimated')
    expect(linkElement).not.toHaveAttribute('class', 'btnAnimated-initial')
    const logoElement = screen.getByAltText('Pokecenter logo')
    expect(logoElement).toBeInTheDocument()
  })
})
