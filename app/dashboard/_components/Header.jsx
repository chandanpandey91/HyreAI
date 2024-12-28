import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'; // Correctly import the Image component
import React from 'react';

function Header() {
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src="/logo.svg" width={160} height={100} alt="logo" />
      <ul className="flex gap-6">
      <li className='hover:text-red-500 hover:font-bold transition-all cursor-pointer'>Home</li>
        <li className='hover:text-red-500 hover:font-bold transition-all cursor-pointer'>About</li>
        <li className='hover:text-red-500 hover:font-bold transition-all cursor-pointer'>Contact</li>
        <li className='hover:text-red-500 hover:font-bold transition-all cursor-pointer'>Check your level</li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
