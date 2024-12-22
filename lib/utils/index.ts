import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classValues: ClassValue[]) {
  return twMerge(clsx(...classValues));
}
