import React, { SFC } from 'react';
import Select from 'react-select';
import DescriptionOption from './DescriptionOption';
import ResetStyles from './ResetStyles';

interface Props {
  options: any[];
  className?: string;
  onSelected: (item: any) => {} | void;
  getOptionValue: (item: any) => string;
  getOptionLabel: (item: any) => string;
}

const SimplePicker: SFC<Props> = ({ className, getOptionLabel, getOptionValue, onSelected, options }) => {
  return (
    <Select
      isSearchable={false}
      classNamePrefix={`gf-form-select-box`}
      className={`width-7 gf-form-input gf-form-input--form-dropdown ${className || ''}`}
      placeholder="Choose"
      options={options}
      onChange={onSelected}
      components={{
        Option: DescriptionOption,
      }}
      styles={ResetStyles}
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
    />
  );
};

export default SimplePicker;