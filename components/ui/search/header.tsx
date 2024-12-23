'use client';
import TextField from '@/components/common/input/text-field';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import Filter from './filter';
import { AnimatePresence } from 'framer-motion';
import { useScholarships } from '@/lib/providers/scholarship-provider';

const Header = () => {
  const { searchScholarships } = useScholarships();
  const [search, setSearch] = useState<string>('');
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilterOpen = () => setFilterOpen((prev) => !prev);

  useEffect(() => {
    searchScholarships(search);
  }, [search, searchScholarships]);

  return (
    <header className="max-w-[1200px] mx-auto h-screen max-h-[400px] flex flex-col items-center justify-center gap-y-10 px-6">
      <h1 className="text-brand font-bold font-giestMono text-[1.6rem] md:text-[2.5rem] text-center">
        Find Scholarships in the United States.
      </h1>

      <div className="max-w-[800px] w-full mx-auto space-x-2 flex flex-col items-end gap-y-4 relative">
        <TextField
          className="flex-1 w-full"
          InputProps={{
            value: search,
            onChange(e) {
              setSearch(e.target.value);
            },
            placeholder: 'Search scholarships by name or school name',
          }}
        />
        <span
          className={cn(
            'w-[35px] h-[35px] rounded-md cursor-pointer border-2 border-brand text-brand',
            'hover:bg-brand hover:text-white transition-all duration-300', //hover
            'grid place-content-center ml-auto' // layout
          )}
          onClick={toggleFilterOpen}
        >
          <FiFilter size={20} />
        </span>

        <AnimatePresence>
          {filterOpen && <Filter close={() => setFilterOpen(false)} />}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
