export type TScholarshipFilter = Record<
  keyof ScholarshipFilters,
  {
    list: string[];
    getQuery: (value: string) => string;
  }
>;

export type Scholarship = {
  school_name: string;
  scholarship_name: string;
  organization?: string;
  eligibility_criteria: string;
  start_date?: string;
  end_date?: string;
  fully_funded?: boolean;
  percentage_funded?: number;
  amount: number;
  eligible_falculties: string[] | 'All'[];
  application_link?: string;
};

export type ScholarshipFilters = {
  country?: string;
  nationality?: string;
  level?: string;
  faculty?: string;
};
