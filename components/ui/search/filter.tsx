'use client';
import Button from '@/components/common/button';
import SelectScholarshipFilter from '@/components/common/select-fields/scholarship-filter';
import { useScholarships } from '@/lib/providers/scholarship-provider';
import { ScholarshipFilters } from '@/lib/types';
import { Variant, motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import { MdClose } from 'react-icons/md';

const variants: Record<string, Variant> = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

interface Props {
  close(): void;
}

const Filter: FC<Props> = ({ close }) => {
  const { filters, updateFilters } = useScholarships();

  const [localFilters, setLocalFilters] = useState<ScholarshipFilters>(filters);

  const updateLocalFilter = (key: keyof ScholarshipFilters, value: string) => {
    setLocalFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const save = () => (updateFilters(localFilters), close());
  const reset = () => (setLocalFilters({}), updateFilters({}), close());

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="visible"
      exit="initial"
      className="bg-white absolute top-[105%] right-[20px] p-3 rounded-md shadow-md w-[400px] space-y-4 max-md:fixed max-md:w-screen max-md:h-screen max-md:z-[20] max-md:top-0 max-md:left-0 max-md:right-0 max-md:space-y-8 max-md:p-6"
    >
      <header className="flex items-center justify-between">
        <h2 className="font-bold text-brand text-[1.1rem]">
          FILTER SCHOLARSHIPS
        </h2>

        <span className="md:hidden">
          <MdClose className="text-red-500" size={30} onClick={close} />
        </span>
      </header>

      <div className="gap-4 grid grid-cols-2 max-md:grid-cols-1">
        <div className="space-y-2 flex-1">
          <p>Country</p>
          <SelectScholarshipFilter
            filterKey="country"
            onSelect={(v) => {
              updateLocalFilter('country', v!);
            }}
            selected={localFilters['country']}
          />
        </div>

        <div className="space-y-2 flex-1">
          <p>Nationality</p>
          <SelectScholarshipFilter
            filterKey="nationality"
            onSelect={(v) => {
              updateLocalFilter('nationality', v!);
            }}
            selected={localFilters['nationality']}
          />
        </div>

        <div className="space-y-2 flex-1">
          <p>Level</p>
          <SelectScholarshipFilter
            filterKey="level"
            onSelect={(v) => {
              updateLocalFilter('level', v!);
            }}
            selected={localFilters['level']}
          />
        </div>

        <div className="space-y-2 flex-1">
          <p>Faculties</p>
          <SelectScholarshipFilter
            filterKey="faculty"
            onSelect={(v) => {
              updateLocalFilter('faculty', v!);
            }}
            selected={localFilters['faculty']}
          />
        </div>
      </div>

      <div className="flex gap-3 !mt-8">
        <Button onClick={reset} variant="outline" size="small" fullWidth>
          Reset
        </Button>
        <Button onClick={save} variant="filled" size="small" fullWidth>
          Save
        </Button>
      </div>
    </motion.div>
  );
};

export default Filter;
