import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex absolute flex-row items-center w-screen z-10'>
       <img src="/Logo.png" alt="LOGO" className='h-56'/>
       <div className='flex flex-row justify-between w-full px-[5%] md:px-[10%]'>
       <p>Home</p>
       <Link href='/about'>About</Link>
       <p>Pages</p>
       <p>Contact</p>
       </div>
       
    </div>
  )
}

export default Header
