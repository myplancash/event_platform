import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href='/' className='w-36'>
          <Image src='/assets/images/logo.svg' width={128} height={38} alt='Evently logo' />
        </Link>
        <div className="flex justify-end gap-3"> {/* w-32 */}
          {/* here the clerk to setup of authentication */}
          <SignedIn>
            <nav className='md:flex-between hidden w-full max-w-xs'>
              <NavItems />
            </nav>
          </SignedIn>
          
          <SignedIn>
            <UserButton afterSignOutUrl='/'/>
            <MobileNav/>
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size='lg'>
              <Link href='sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </div>
       </div>
    </header>
  )
}

export default Header