import React, { FC } from 'react';
import SelectField from '../input/select-field';
import { scholarshipFilters } from '@/lib/data';

interface Props {
  selected?: string;
  onSelect(filter?: string): void;
  filterKey: keyof typeof scholarshipFilters;
  disabled?: boolean;
}

const SelectScholarshipFilter: FC<Props> = ({
  selected,
  onSelect,
  filterKey: key,
  disabled,
}) => {
  return (
    <SelectField
      value={selected}
      disabled={disabled}
      className="w-full"
      onClear={() => onSelect(undefined)}
      onSelect={({ value }) => {
        onSelect(value);
      }}
      data={scholarshipFilters[key].list?.map((v) => ({
        value: v,
        label: v,
        id: v,
      }))}
      onSearch={(search) => {
        return scholarshipFilters[key]?.list
          ?.filter((v) => v.toLowerCase().includes(search?.toLowerCase() ?? ''))
          .map((v) => ({
            value: v,
            label: v,
            id: v,
          }));
      }}
    />
  );
};

export default SelectScholarshipFilter;
