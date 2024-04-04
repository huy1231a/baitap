'use client'
import React from 'react'

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disaledBtn?: boolean
  outline?: boolean
  small?: string
  icons?: any
  log?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disaledBtn,
  outline,
  small,
  icons,
  log,
}) => {
  console.log('disaledBtn', disaledBtn)

  return (
    <>
      <button
        disabled={disaledBtn}
        onClick={onClick}
        className={`
        relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 hover:shadow-lg transition ${
          log ? 'w-full' : 'w-1/2'
        }
        ${
          disaledBtn
            ? 'bg-[#cecbcb] border-transparent text-neutral-500'
            : 'bg-green-500'
        }
        ${outline ? 'border-green-500' : 'border-green-500'}
        ${outline ? 'bg-white text-black' : 'text-white'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}>
        <div className='flex gap-3 items-center justify-center'>
          {icons}
          {label}
        </div>
      </button>
    </>
  )
}

export default Button
