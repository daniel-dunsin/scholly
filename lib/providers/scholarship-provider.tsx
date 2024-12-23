'use client';
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Scholarship, ScholarshipFilters } from '../types';
import { useQuery } from '@tanstack/react-query';
import { getScholarships } from '../services';

interface ScholarshipContextProps {
  scholarships: Scholarship[];
  searchScholarships(search: string): void;
  updateFilters(filter: ScholarshipFilters): void;
  filters: ScholarshipFilters;
  loading: boolean;
}

const ScholarshipContext = createContext<ScholarshipContextProps | null>(null);

export const ScholarshipProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [filteredScholarships, setFilteredScholarships] = useState<
    Scholarship[]
  >([]);

  const [filters, setFilters] = useState<ScholarshipFilters>({
    country: undefined,
    level: undefined,
    nationality: undefined,
    faculty: undefined,
  });

  const searchScholarships = (search: string) => {
    search = search?.toLowerCase();
    setFilteredScholarships(
      search
        ? scholarships.filter((s) => {
            const cond1 = s.school_name.toLowerCase().includes(search);
            const cond2 = s.scholarship_name.toLowerCase().includes(search);
            const cond3 = s.organization?.toLowerCase().includes(search);
            const cond4 = s.eligible_falculties
              ?.join(' ')
              .toLowerCase()
              .includes(search);

            return cond1 || cond2 || cond3 || cond4;
          })
        : scholarships
    );
  };

  const updateFilters = (filter: ScholarshipFilters) => setFilters(filter);

  const updateNewScholarships = (data: Scholarship[]) => {
    setScholarships(data);
    setFilteredScholarships(data);
  };

  const { data, isPending: loadingScholarships } = useQuery({
    queryKey: ['useGetScholarships', JSON.stringify(filters)],
    queryFn: () => getScholarships(filters),
  });

  useEffect(() => {
    if (data) {
      updateNewScholarships(data);
    }
  }, [data]);

  return (
    <ScholarshipContext.Provider
      value={{
        scholarships: filteredScholarships,
        filters,
        searchScholarships,
        updateFilters,
        loading: loadingScholarships,
      }}
    >
      {children}
    </ScholarshipContext.Provider>
  );
};

export const useScholarships = () => {
  const context = useContext(ScholarshipContext);

  if (!context)
    throw new Error(
      'ScholarshipContext not found in our widget tree, ensure to wrap your app with ScholarshipProvider'
    );

  return context;
};
