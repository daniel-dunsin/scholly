import Navbar from '@/components/layout/navbar';
import React from 'react';
import Header from './header';
import ScholarshipList from './scholarships-list';

const SearchPage = () => {
  return (
    <section className="bg-brandLight min-h-screen">
      <Navbar />
      <Header />
      <ScholarshipList />
    </section>
  );
};

export default SearchPage;
