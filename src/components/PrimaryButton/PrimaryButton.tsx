import Link from 'next/link'
import React from 'react'

type Props = {
  className?: string
  label: string
  asLink?: boolean
  href?: string
} & React.ComponentPropsWithRef<'button'>

export const PrimaryButton: React.FC<Props> = ({
  className,
  asLink,
  label,
  href,
  ...rest
}) => {
  const styles = `${className} btn px-6`

  return asLink && href ? (
    <Link href={href} className={styles}>
      {label}
    </Link>
  ) : (
    <button className={styles} {...rest}>
      {label}
    </button>
  )
}

PrimaryButton.displayName = 'PrimaryButton'
export type PrimaryButtonProps = Props
export default PrimaryButton
