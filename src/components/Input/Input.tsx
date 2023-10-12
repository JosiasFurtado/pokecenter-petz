import React, { forwardRef, useId } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ name, label, ...rest }, ref) => {
    const inputId = useId()
    return (
      <div className="flex flex-col">
        <label className="text-xs font-bold mb-2" htmlFor={inputId}>
          {label}
        </label>
        <input
          id={inputId}
          name={name}
          ref={ref}
          className="border border-gray-200 rounded-lg py-2 px-2 placeholder:text-gray-600 w-full"
          {...rest}
        />
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
