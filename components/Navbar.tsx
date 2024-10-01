'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { User } from 'next-auth';
import { ModeToggle } from './modeToggle';

function Navbar() {
  const { data: session } = useSession();
  const user : User = session?.user;

  return (
    <nav className="p-2 md:p-3 shadow-md bg-slate-300-900 text-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div><span className="text-2xl text-green-700">{"<"}</span><span className="text-2xl text-pink-700">Port<b className="text-2xl text-green-700">Folio</b></span><span className="text-2xl text-green-700">{"/>"}</span></div>
         
        {session ? (
          <>
            <span className="mr-4">
              Welcome, {user.username || user.email}
            </span>
           
           <div className='flex items-center gap-3'>
           <Button onClick={() => signOut()} className="w-full md:w-auto bg-slate-100 text-black" variant='outline'>
              Logout
            </Button>
            <ModeToggle/>
           </div>
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="w-full md:w-auto bg-slate-100 text-black" variant={'outline'}>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
