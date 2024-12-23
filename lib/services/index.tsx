/* eslint-disable @typescript-eslint/no-explicit-any */

import { Scholarship, ScholarshipFilters } from '../types';
import axios from 'axios';
import { toast } from 'sonner';
import { scholarships } from '../data';

export const getScholarships = async (filter?: ScholarshipFilters) => {
  let url = `/api/scholarships?`;

  if (filter?.nationality) {
    url += `nationality=${filter.nationality}&`;
  }
  if (filter?.country) {
    url += `country=${filter.country}&`;
  }
  if (filter?.level) {
    url += `level=${filter.level}&`;
  }
  if (filter?.faculty) {
    url += `faculty=${filter.faculty}&`;
  }

  try {
    const response = await axios.get<{
      result: { scholarships: Scholarship[] };
    }>(url);

    return response?.data?.result?.scholarships;
  } catch (error) {
    toast.error('AI rate limit exceeded, using dummy data for now');
    return scholarships;
  }
};
