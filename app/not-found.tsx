import Button from '@/components/common/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <section className="h-screen bg-brandLight p-[1rem] flex items-center justify-center flex-col space-y-3">
      <h2 className="text-[1.5rem] md:text-[4rem] font-giestMono font-bold text-brand">
        Oops! Resource Not Found
      </h2>
      <Link href={'/'}>
        <Button size="large">Back to home</Button>
      </Link>
    </section>
  );
};

export default NotFound;
