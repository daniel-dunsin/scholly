import React, { FC } from 'react';
import Logo from '../common/logo';
import { MdClose } from 'react-icons/md';
import { navbarLinks } from '@/lib/data';
import Link from 'next/link';
import {
  BsEnvelope,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
} from 'react-icons/bs';
import { motion, Variant } from 'framer-motion';

interface Props {
  close(): void;
}

const navbarVariant: Record<string, Variant> = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const MobileNavbar: FC<Props> = ({ close }) => {
  return (
    <motion.section
      variants={navbarVariant}
      initial="initial"
      animate="visible"
      exit="initial"
      className="bg-brand fixed top-0 left-0 w-screen min-h-screen z-[10] p-6 flex flex-col h-screen"
    >
      <header className="flex items-center justify-between gap-8">
        <Logo color="white" />

        <MdClose
          onClick={close}
          className="text-white cursor-pointer"
          size={30}
        />
      </header>

      <ul className="mt-20 text-center space-y-4">
        {navbarLinks.map((link, idx) => {
          return (
            <li key={idx}>
              <Link
                href={link.route}
                className="text-center text-white text-[1.4rem] hover:underline transition-all duration-300 font-giestMono"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="my-8 w-[80%] bg-white h-[2px] mx-auto"></div>

      <div className="flex items-center justify-center text-white text-[1.5rem] space-x-5">
        <BsInstagram />
        <BsTwitterX />
        <BsWhatsapp />
        <BsEnvelope />
      </div>

      <p className="justify-self-end flex-1 flex items-end justify-center text-center text-white font-bold font-giestSans">
        &copy; 2024 All Rights Reserved
      </p>
    </motion.section>
  );
};

export default MobileNavbar;
