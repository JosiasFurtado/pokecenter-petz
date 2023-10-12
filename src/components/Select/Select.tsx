import React, { forwardRef, useId } from 'react'
import { Pokemon } from '../FromSteps/PokemonList'

type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  name: string
  label: string
  placeholder: string
  flexrow?: boolean
  className?: string
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  (
    { name, label, children, placeholder, flexrow, className, ...rest },
    ref
  ) => {
    const inputId = useId()
    return (
      <div
        className={`${
          flexrow ? 'flex-row justify-between items-center' : 'flex-col'
        } ${className ? className : ''} flex`}
      >
        <label
          className={`${!flexrow && 'mb-2'} text-xs font-bold`}
          htmlFor={inputId}
        >
          {label}
        </label>
        <select
          id={inputId}
          name={name}
          ref={ref}
          className={`${
            flexrow ? 'w-4/5' : 'w-full'
          } border border-gray-200 rounded-lg py-2 px-2 placeholder:text-gray-600`}
          {...rest}
        >
          <option value="" className="text-gray-600">
            {placeholder}
          </option>
          {children}
        </select>
      </div>
    )
  }
)

Select.displayName = 'Select'
export default Select
