'use client'
import React, { useCallback, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IoMdMenu } from 'react-icons/io'

const Search = () => {
  const [isMobile, setIsMobile] = useState(false)
  const toggleMobile = useCallback(() => {
    setIsMobile((current) => !current)
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {isMenuOpen && (
        <div className='relative'>
          <div
            className={`${
              !isMenuOpen && 'element animate-fadeInRight'
            } animate-fadeInLeft fixed top-0 left-0 bg-[#cecbcb] h-full w-full z-50 transform transition-transform ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
            <button
              onClick={() => {
                setIsMenuOpen(false)
              }}
              className='px-2 py-4 bg-transparent absolute right-8 top-6'>
              <AiOutlineCloseCircle size={30} />
            </button>
            <div className='flex justify-center items-center h-screen flex-col gap-7'>
              <div className='bg-white w-[90%] py-8 rounded-lg flex flex-col gap-5'>
                <p
                  className='text-center font-semibold text-lg cursor-pointer transition hover:text-green-500 duration-150'
                  onClick={() => {
                    console.log('hi')
                  }}>
                  Đăng nhập
                </p>
                <div className='border-1 h-[1px] w-[90%] bg-gray-200 mx-auto'></div>
                <p className='text-center font-semibold text-lg cursor-pointer hover:text-green-500 hover:transition'>
                  Đăng ký
                </p>
              </div>
              <div className='bg-white w-[90%] py-8 rounded-lg flex flex-col gap-5'>
                <p className='text-center font-semibold text-lg cursor-pointer transition hover:text-green-500 duration-150'>
                  Về Mioto
                </p>
                <div className='border-1 h-[1px] w-[90%] bg-gray-200 mx-auto'></div>
                <p className='text-center font-semibold text-lg cursor-pointer hover:text-green-500 hover:transition'>
                  Trở thành chủ xe
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className='
        hidden lg:block
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
    '>
        <div className='flex flex-row items-center justify-between'>
          <div className='hidden sm:block  text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
            Về Mioto
          </div>
          <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
            Trở thành chủ xe
          </div>
          <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
            Hi! <span className='font-bold underline'>Huy</span>
          </div>
          <div
            onClick={() => {
              console.log('hi')
            }}
            className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
            Đăng Xuat
          </div>
        </div>
      </div>
      <div
        onClick={toggleMenu}
        className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
        <IoMdMenu className='transition' size={30} />
      </div>
    </>
  )
}

export default Search
