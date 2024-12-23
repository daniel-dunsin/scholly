'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC, ReactNode } from 'react';
import { ScholarshipProvider } from './scholarship-provider';

interface Props {
  children: ReactNode;
}

export const queryClient = new QueryClient();

const AppProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ScholarshipProvider>{children}</ScholarshipProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
