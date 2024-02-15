import React from 'react'

function AboutPage() {
  return (
    <div className='p-8 pt-16 flex flex-col items-center gap-32 max-w-[600px] mx-auto'>
      <h1 className='text-4xl font-medium'>About</h1>
      <p className='text-lg'>This is a simple todo app built with Next.js, Prisma, and Clerk.</p>
    </div>
  )
}

export default AboutPage