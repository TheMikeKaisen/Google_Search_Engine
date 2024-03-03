import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'

//icons
import {RiSettings3Line} from 'react-icons/ri';
import {TbGridDots} from 'react-icons/tb'

function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href="/">
          <Image src="https://imgs.search.brave.com/vTCwcACTcg2o4L_XU9oOIfkA6VLpBo1CJ618ShAOhSI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw"
            alt="google logo"
            height={120}
            width={40}
            priority
            style={{width: "auto"}}
        />
        </Link>
        <div className='flex-1'>
            <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <RiSettings3Line className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer'/>
          <TbGridDots className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer'/>
        </div>
        <button className='bg-blue-500 text-white px-5 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2'>Sign in</button>
      </div>
      
    </header>
  )
}

export default SearchHeader
