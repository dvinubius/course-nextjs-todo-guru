import Navbar from '@/components/Navbar'
import React from 'react'

function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className='relative h-screen overflow-y-auto'>
      <Navbar />
      <main className='pt-[4.25rem]'>
        {children}
      </main>
    </div>
  )
}

export default Layout