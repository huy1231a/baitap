'use client'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Modal from './Modal'
import Input from '../Input'
import toast from 'react-hot-toast'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Button from '../Button'

const RegistaModal = () => {
  const registerModal = useRegisterModal()
  const [isCheck, setIsCheck] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckbox = useCallback(() => {
    setIsCheck(!isCheck)
  }, [isCheck])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      phone: '',
      name: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => {
        toast.error('Some thing Wrong')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContend = (
    <div className='w-ful'>
      <Input
        label='Số điện thoại'
        id='phone'
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
      <Input
        label='Tên hiển thị'
        id='name'
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
      <Input
        label='Mật khẩu'
        id='password'
        type='password'
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
      <Input
        label='Xác nhận mật khẩu'
        id='password'
        type='password'
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
      <Input
        label='Mã giới thiệu (nếu có)'
        id='code'
        disabled={isLoading}
        errors={errors}
        register={register}
      />
      <div className='mt-4 flex items-center gap-3 w-full'>
        <div className='flex items-center h-5'>
          <input
            onChange={handleCheckbox}
            id='helper-checkbox'
            aria-describedby='helper-checkbox-text'
            type='checkbox'
            className='w-4 h-4 accent-green-500 rounded-md text-white'
          />
        </div>
        <p className='text-lg text-black space-x-3 text-center '>
          Tôi đồng ý với chính sách của Mioto.{' '}
          <span className='text-green-500 cursor-pointer'>Chi tiết</span>
        </p>
      </div>
    </div>
  )

  const footerContend = (
    <>
      <div className='flex flex-row w-full gap-3 mt-2'>
        <Button
          label='Facebook'
          outline
          log={false}
          icons={<FaFacebook className='text-blue-500' />}
          onClick={() => {}}
        />
        <Button
          label='Google'
          outline
          log={false}
          icons={<FcGoogle />}
          onClick={() => {}}
        />
      </div>
      <div className='flex justify-center flex-row items-center gap-2 mt-2'>
        <div>Bạn đã có tài khoản?</div>
        <div className='text-green-500 cursor-pointer hover:underline transition'>
          Đăng nhập tại đây
        </div>
      </div>
    </>
  )

  return (
    <Modal
      body={bodyContend}
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Đăng ký'
      actionLabel='Đăng ký'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      disabledBtn={isCheck}
      footer={footerContend}
    />
  )
}

export default RegistaModal
