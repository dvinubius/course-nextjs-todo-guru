'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

function NavigateBackTodos() {
  const router = useRouter();

  const navigateBack = () => {
    router.replace('/todos');
    router.refresh();  
  }

  return (
    <BsArrowLeft className='mr-auto text-5xl cursor-pointer' onClick={navigateBack}/>
  )
}

export default NavigateBackTodos