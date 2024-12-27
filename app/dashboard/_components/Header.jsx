import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='flex p-4 items-center justify-between'>
        <Image src={'/logo.svg'} width={160} height={100} alt='logo' />
        <ul className='flex gap-6'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header