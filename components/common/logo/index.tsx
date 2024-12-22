import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';

interface Props {
  color?: 'white' | 'brand';
}

const Logo: FC<Props> = ({ color = 'brand' }) => {
  return (
    <div className="flex items-center space-x-2 text-[1rem] md:text-[2rem] font-bold min-w-[150px]">
      {color == 'brand' ? (
        <FcGraduationCap className="text-[1.5rem] md:text-[2.5rem]" />
      ) : (
        <FaGraduationCap className="text-white text-[1.5rem] md:text-[2.5rem]" />
      )}
      <h2 className={cn(`text-${color} font-giestMono`)}>Scholly</h2>
    </div>
  );
};

export default Logo;
