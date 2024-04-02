'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Logo = () => {
  const router = useRouter()
  return (
    <Image
      alt='logo'
      className=' cursor-pointer'
      width={100}
      height={100}
      src={'/image/logo-full.ea382559.png'}
      onClick={() => {
        router.push('/')
      }}
    />
  )
}

export default Logo
