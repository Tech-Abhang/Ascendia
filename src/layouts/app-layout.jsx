import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='relative z-1'>
      <div className="grid-background ">
        <main className="h-screen">
          <Header />
          <Outlet />
        </main>
        <div className='p-10 text-center bg-gray-800 relative z-1'>Made By Abhang</div>
      </div>
    </div>
  );
};

export default AppLayout