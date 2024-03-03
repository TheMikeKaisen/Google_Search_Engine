import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    
    <HomeHeader />
    <div className='flex flex-col items-center mt-24'>
      <Image src="https://imgs.search.brave.com/vTCwcACTcg2o4L_XU9oOIfkA6VLpBo1CJ618ShAOhSI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw"
      alt="google logo"
      height={80}
      width={200}
      priority
      style={{width: "auto"}}
      />
      
      <HomeSearch />
    </div>

    </>
  )
}

export default page
