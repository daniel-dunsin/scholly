'use client';
import React, { useState } from 'react';
import Logo from '../common/logo';
import Link from 'next/link';
import { navbarLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../common/button';
import MobileNavbar from './mobile-navbar';
import { AnimatePresence } from 'framer-motion';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="max-w-[1200px] mx-auto px-5 py-4 flex gap-5 justify-between w-full items-center">
      <Logo />

      <ul className="flex items-center flex-1 justify-center gap-6 max-md:hidden">
        {navbarLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.route}
              className={cn(
                'text-[1.2rem] hover:text-brandSecondary transition duration-300',
                link.route == pathname &&
                  'text-brandSecondary font-bold underline'
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <AnimatePresence>
          {mobileNavOpen && (
            <MobileNavbar close={() => setMobileNavOpen(false)} />
          )}
        </AnimatePresence>
      </div>

      <BiMenu
        size={30}
        onClick={() => setMobileNavOpen(true)}
        cursor={'pointer'}
        className="md:hidden"
      />

      <div className="min-w-[150px] max-md:hidden">
        <Button onClick={() => router.push('/search')}>Go to search</Button>
      </div>
    </nav>
  );
};

export default Navbar;
