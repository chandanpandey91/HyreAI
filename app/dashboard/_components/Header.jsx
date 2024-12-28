"use client"
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'; // Correctly import the Image component
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function Header() {
  const path=usePathname();
  useEffect(()=>{
    console.log(path);
  },[])
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src="/logo.svg" width={160} height={100} alt="logo" />
      <ul className="flex gap-6">
      <li className={`hover:text-red-500 hover:font-bold transition-all cursor-pointer ${path==='/dashboard'&&'text-red-500 font-bold'}`}>Home</li>
        <li className={`hover:text-red-500 hover:font-bold transition-all cursor-pointer ${path==='/dashboard/about'&&'text-red-500 font-bold'}`}>About</li>
        <li className={`hover:text-red-500 hover:font-bold transition-all cursor-pointer ${path==='/dashboard/contact'&&'text-red-500 font-bold'}`}>Contact</li>
        <li className={`hover:text-red-500 hover:font-bold transition-all cursor-pointer ${path==='/dashboard/check'&&'text-red-500 font-bold'}`}>Check your level</li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
