import { cn } from '@/lib/utils';
import React, {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactElement,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  LabelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  InputProps?: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
  helperText?: string;
  helperTextProps?: HTMLAttributes<HTMLHeadingElement>;
  multiline?: boolean;
  inputSuffix?: ReactElement;
}

export default function TextField({
  InputProps,
  label,
  helperText,
  helperTextProps,
  multiline,
  LabelProps,
  inputSuffix,
  ...props
}: Props) {
  return (
    <div {...props} className={`flex gap-1 flex-col w-full ${props.className}`}>
      {label && (
        <label
          {...LabelProps}
          htmlFor={InputProps?.id}
          className={`text-[.9rem] font-light ${LabelProps?.className}`}
        >
          {label}
        </label>
      )}

      <div className="flex items-center gap-2">
        {multiline ? (
          <textarea
            {...InputProps}
            className={cn(
              'w-full h-[150px] px-2 py-[.65rem] outline-none text-[#444] text-[.8rem] border-2 border-gray-300 focus:border-brand resize-none rounded-md',
              InputProps?.className
            )}
          />
        ) : (
          <input
            {...InputProps}
            className={cn(
              'w-full px-2 py-[.65rem] font-giestSans placeholder:font-giestMono  outline-none text-[#444] text-[.8rem] border-2 border-gray-300 focus:border-brand bg-[#f3f3f3] rounded-md',
              InputProps?.className
            )}
          />
        )}
        {inputSuffix}
      </div>

      {helperText && (
        <p
          {...helperTextProps}
          className={`pl-2 text-red-500 text-[.8rem] ${helperTextProps?.className}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
