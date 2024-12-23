'use client';
import Button from '@/components/common/button';
import { Scholarship } from '@/lib/types';
import { format } from 'date-fns';
import React, { FC } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

interface Props {
  scholarship: Scholarship;
  close(): void;
}

const variant = {
  hidden: {
    opacity: 0,
    translateX: '100%',
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: 'tween',
    },
  },
};

const ScholarshipDetails: FC<Props> = ({ scholarship, close }) => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black/30 z-[50]">
      <motion.aside
        variants={variant}
        initial="hidden"
        animate="visible"
        className="w-screen max-md:max-w-screen max-w-[400px] bg-white h-screen ml-auto p-6 overflow-y-scroll"
      >
        <header className="flex items-center justify-between gap-4">
          <h2 className="font-bold text-[1.2rem] text-brand">
            Scholarship Detail
          </h2>

          <IoCloseCircleOutline
            size={32}
            className="text-brand cursor-pointer"
            onClick={close}
          />
        </header>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <DetailComponent
            question="School Name"
            answer={scholarship.school_name}
          />{' '}
          <DetailComponent
            question="Scholarship Name"
            answer={scholarship.scholarship_name}
          />{' '}
          <DetailComponent
            question="Fully Funded?"
            answer={scholarship.fully_funded ? 'Yes' : 'No'}
          />
          {scholarship.amount && (
            <DetailComponent
              question="Amount"
              answer={`$ ${scholarship.amount.toLocaleString()}`}
            />
          )}
          {scholarship.start_date && scholarship.end_date && (
            <div className="col-span-2">
              <DetailComponent
                question="Timeline"
                answer={
                  format(scholarship.start_date, 'do MMMM, yyyy') +
                  ' - ' +
                  format(scholarship.end_date, 'do MMMM, yyyy')
                }
              />
            </div>
          )}
          <div className="col-span-2">
            <DetailComponent
              question="Eligibity Criteria"
              answer={scholarship.eligibility_criteria}
            />
          </div>
        </div>
        <Button onClick={close} className="mt-16" variant="outline" fullWidth>
          Close
        </Button>
      </motion.aside>
    </section>
  );
};

interface DetailProps {
  question: string;
  answer: string;
}

const DetailComponent: FC<DetailProps> = ({ question, answer }) => {
  return (
    <div>
      <p className="text-[.9rem] font-bold  text-brand">{question}</p>
      <h3 className="text-[.9rem] mt-1">{answer}</h3>
    </div>
  );
};

export default ScholarshipDetails;
