'use client';
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion, Variant } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaGraduationCap } from 'react-icons/fa6';

const tooltipVariants: Record<string, Variant> = {
  hidden: {
    opacity: 0,
    translateY: '105%',
    translateX: '-50%',
  },
  visible: {
    opacity: 1,
    translateY: 0,
    translateX: '-50%',
  },
};

const arrowVariant: Record<string, Variant> = {
  noBounce: {
    translateY: 0,
  },
  bounce: {
    translateY: [-2, 0, 2, 0, -2],
    transition: {
      type: 'tween',
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop',
    },
    transitionTimingFunction: 'ease-in-out',
  },
};

const BannerNav = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { push } = useRouter();

  const openTooltip = () => setShowTooltip(true);
  const closeTooltip = () => setShowTooltip(false);

  const goToPage = () => push('/search');

  return (
    <div
      onMouseLeave={closeTooltip}
      className="flex items-center justify-center mt-8 relative"
    >
      <span
        onClick={goToPage}
        className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-brand text-white rounded-full grid place-items-center cursor-pointer"
      >
        <motion.span
          onMouseEnter={openTooltip}
          variants={arrowVariant}
          initial="noBounce"
          animate="bounce"
          whileHover="noBounce"
        >
          {showTooltip ? (
            <BsArrowRight color="white" size={40} />
          ) : (
            <FaGraduationCap color="white" size={40} />
          )}
        </motion.span>
      </span>

      <motion.div
        variants={tooltipVariants}
        initial="hidden"
        animate={showTooltip ? 'visible' : 'hidden'}
        exit="hidden"
        onClick={goToPage}
        className="cursor-pointer bg-white py-2 px-3 rounded-md shadow-md border-brand border min-w-fit flex items-center gap-3 text-[.9rem] absolute top-[110%] left-[50%] -translate-x-[50%]"
      >
        <p>Explore</p>
      </motion.div>
    </div>
  );
};

export default BannerNav;
