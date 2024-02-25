import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {
  return (
    <div className='flex px-8 gap-12 w-full'>
        <Header />
        <hr className='border-2 h-[90dvh] bg-text-200'/>
        <Outlet />
    </div>
  )
}
