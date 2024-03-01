import Link from 'next/link'
import React from 'react'
import {TbGridDots} from "react-icons/tb"

function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm'>
        <div className='flex space-x-4 items-center'>
            <Link href={"https://mail.google.com"} className='hover:underline'>
                Gmail
            </Link>
            <Link href={"https://image.google.com"} className='hover:underline'>
                Image
            </Link>

            
            <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl'/>

            <button className='bg-blue-500 text-white px-5 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>Sign In</button>
        </div>
    </header>
  )
}

export default HomeHeader
