'use client'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  formartPrice?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formartPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className='w-full relative mt-5'>
      {formartPrice && (
        <BiDollar
          size={24}
          className='text-neutral-700 absolute top-5 left-2'
        />
      )}
      <p className='text-base font-semibold text-neutral-500'>{label}</p>
      <input
        className={`p-3 border-[1px]  w-full focus:outline-none rounded-md mt-2 transition disabled:opacity-70 disabled:cursor-not-allowed
          ${formartPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-neutral-300'}
        `}
        type={type}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
      />
    </div>
  )
}

export default Input
