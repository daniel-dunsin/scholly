'use client';

import React, { FC, useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import { GiTiedScroll } from 'react-icons/gi';
import { HiDotsVertical } from 'react-icons/hi';
import { Scholarship } from '@/lib/types';
import ScholarshipDetails from './scholarship-details';
import { useScholarships } from '@/lib/providers/scholarship-provider';

const ScholarshipList = () => {
  const { loading, scholarships } = useScholarships();

  const [scholarship, setScholarship] = useState<Scholarship | undefined>(
    undefined
  );

  if (loading) {
    return (
      <section className="max-w-[1200px] mx-auto px-6 text-center space-y-4 h-[90vh] max-h-[200px] flex flex-col items-center justify-center">
        <FiLoader className="animate-spin text-[2.5rem] mx-auto" />
        <p className="mx-auto text-center text-brand font-semibold font-giestMono text-[1.2rem]">
          Loading Scholarships
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {scholarship && (
        <ScholarshipDetails
          scholarship={scholarship}
          close={() => setScholarship(undefined)}
        />
      )}

      {scholarships.map((scholarship, index) => {
        return (
          <article
            key={index}
            className="p-4 rounded-md border border-brand bg-white shadow-black/50 shadow"
          >
            <header className="flex items-center gap-3 text-brand font-bold font-giestMono justify-between">
              <div className="flex items-center gap-3">
                <span className="flex w-[35px] h-[35px] items-center justify-center border border-brand rounded-md shadow-md cursor-pointer">
                  <GiTiedScroll className="text-brand" />
                </span>

                <h1 className="text-[.85rem] font-bold font-giestMono text-ellipsis">
                  {scholarship.scholarship_name}
                </h1>
              </div>

              <span
                onClick={() => setScholarship(scholarship)}
                className="w-[25px] h-[25px] rounded-full flex items-center justify-center border border-brand cursor-pointer"
              >
                <HiDotsVertical className="text-brand" />
              </span>
            </header>

            <p className="mt-3">{scholarship.eligibility_criteria || ''}</p>

            <div className="flex gap-2 items-center mt-3 flex-wrap">
              <Chip
                text={
                  scholarship.fully_funded ? 'Fully Funded' : 'Partially Funded'
                }
              />
              {scholarship.amount && (
                <Chip text={`$ ${scholarship.amount.toLocaleString()}`} />
              )}
              {!scholarship.fully_funded && scholarship.percentage_funded && (
                <Chip text={`${scholarship.percentage_funded}%`} />
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
};

interface ChipProps {
  text?: string;
}

export const Chip: FC<ChipProps> = ({ text }) => {
  return (
    <span className="inline-block p-1 bg-white text-brand border-brand rounded-md border hover:bg-brand hover:text-white transition-all duration-300 text-[.65rem] cursor-pointer">
      {text}
    </span>
  );
};

export default ScholarshipList;
