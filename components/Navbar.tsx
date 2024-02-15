import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { BiHome } from 'react-icons/bi'

function Navbar() {
  return (
    <div className='fixed flex justify-between items-center px-8 h-[4.25rem] w-full border-b border-purple-400 bg-[#f1f3f3] shadow-md'>
      <Link href='/'>
        <BiHome className='text-4xl' />
      </Link>
      <div className='flex items-center gap-16'>
        <Link href='/todos' className='text-xl hover:opacity-60 transition-all duration-150'>
          Todos
        </Link>
        <Link href='/about' className='text-xl hover:opacity-60 transition-all duration-150'>
          About
        </Link>
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar