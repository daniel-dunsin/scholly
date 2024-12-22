'use client';
import React, { useState } from 'react';
import Logo from '../common/logo';
import Link from 'next/link';
import { navbarLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Button from '../common/button';
import { screenSizes, useMediaQuery } from '@/lib/hooks/useMediaQuery';
import MobileNavbar from './mobile-navbar';
import { AnimatePresence } from 'framer-motion';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: screenSizes.mobile.max });

  return (
    <nav className="max-w-[1200px] mx-auto px-5 py-4 flex gap-5 justify-between w-full items-center">
      <Logo />

      {!isMobile ? (
        <ul className="flex items-center flex-1 justify-center gap-6">
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
      ) : (
        <AnimatePresence>
          {mobileNavOpen && (
            <MobileNavbar close={() => setMobileNavOpen(false)} />
          )}
        </AnimatePresence>
      )}

      {isMobile ? (
        <BiMenu
          size={30}
          onClick={() => setMobileNavOpen(true)}
          cursor={'pointer'}
        />
      ) : (
        <div className="min-w-[150px]">
          <Button>Go to search</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
