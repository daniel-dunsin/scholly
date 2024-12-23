'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC, ReactNode } from 'react';
import { ScholarshipProvider } from './scholarship-provider';
import { Toaster } from 'sonner';

interface Props {
  children: ReactNode;
}

export const queryClient = new QueryClient();

const AppProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ScholarshipProvider>{children}</ScholarshipProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
