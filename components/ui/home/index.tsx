import Navbar from '@/components/layout/navbar';
import React from 'react';
import Banner from './banner';

const HomeComponent = () => {
  return (
    <section className={'bg-brandLight min-h-screen flex flex-col w-screen'}>
      <Navbar />
      <Banner />
    </section>
  );
};

export default HomeComponent;
