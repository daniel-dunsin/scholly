'use client';
import React, { ReactNode } from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import BannerNav from './banner-nav';
import { motion } from 'framer-motion';

const letterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Banner = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-6 pt-[6rem] px-6 relative flex-1 w-full">
      <h1 className="text-center text-[4rem] max-md:text-[2.4rem] font-bold font-giestMono gap-3 items-center justify-center">
        Welcome to
        <motion.span
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          style={{ fontWeight: 'bold' }}
          className="bg-brand text-white inline-flex max-w-fit rounded-md py-0 px-[.8rem] items-center ml-3"
        >
          {('SCHOLLY'.split('') as Array<ReactNode | string>)
            .concat(<FaGraduationCap className="inline-block ml-3" />)
            .map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariant}
                className="!font-geistMono"
              >
                {char}
              </motion.span>
            ))}
        </motion.span>
      </h1>

      <p className="mt-8 text-center text-[1.6rem] max-md:text-[1rem]">
        your one stop platform for scholarships in the united states
      </p>

      <BannerNav />
    </div>
  );
};

export default Banner;
