import RawAutocomplete from '@mui/material/Autocomplete';
import RawBox from '@mui/material/Box';
import RawCheckbox from '@mui/material/Checkbox';
import RawChip from '@mui/material/Chip';
import RawTextField from '@mui/material/TextField';
import { SyntheticEvent } from 'react';

import type { OutlinedTextFieldProps } from '@mui/material/TextField';

interface TextFieldProps {
  id?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  sx?: Array<object | boolean> | object;
  variant?: 'filled' | 'outlined' | 'standard';
  disabled?: boolean;
  required?: boolean;
  type?: 'number';
  defaultValue?: string;
  value?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  id = '',
  label = '',
  placeholder = '',
  onChange = (e) => {
    if (e) {
      return;
    }
  },
  variant = 'outlined',
  disabled = false,
  required = false,
  sx = {},
  type,
  defaultValue,
  value,
}) => {
  return (
    <RawTextField
      id={id}
      label={label}
      placeholder={placeholder}
      onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
      variant={variant}
      disabled={disabled}
      required={required}
      sx={sx}
      type={type}
      defaultValue={defaultValue}
      value={value}
    />
  );
};

interface MultipleAutocompleteProps {
  id?: string;
  options: string[];
  sx?: Array<object | boolean> | object;
  label?: string;
  onChange?: (e: SyntheticEvent, value: string | string[] | null) => void;
  size?: 'medium' | 'small';
  value: string[];
}
export const MultipleAutocomplete: React.FC<MultipleAutocompleteProps> = ({
  options,
  id = '',
  sx = {},
  label = '',
  onChange = (e, v) => {
    if (e && v) {
      return;
    }
  },
  size = 'medium',
  value,
}) => {
  return (
    <RawAutocomplete
      value={value}
      multiple
      id={id}
      disablePortal
      disableCloseOnSelect
      sx={sx}
      size={size}
      options={options}
      onChange={(e, value) => {
        onChange(e, value);
      }}
      renderOption={(props, option, { selected }) => {
        return (
          <li {...props} key={option}>
            <RawCheckbox checked={selected} key={option + '-checkbox'} />
            {option}
          </li>
        );
      }}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <RawChip {...getTagProps({ index })} key={option} label={option} />
        ));
      }}
      renderInput={(params) => {
        return (
          <RawTextField
            {...(params as OutlinedTextFieldProps)}
            variant={'outlined'}
            size={size}
            label={label}
          />
        );
      }}
    />
  );
};

interface AutocompleteProps {
  id?: string;
  options: string[];
  sx?: Array<object | boolean> | object;
  label?: string;
  onChange?: (e: SyntheticEvent, value: string | string[] | null) => void;
  size?: 'medium' | 'small';
  value: string;
}
export const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  id = '',
  sx = {},
  label = '',
  onChange = (e, v) => {
    if (e && v) {
      return;
    }
  },
  size = 'medium',
  value,
}) => {
  return (
    <RawAutocomplete
      value={value}
      id={id}
      disablePortal
      sx={sx}
      size={size}
      options={options}
      onChange={(e, value) => {
        onChange(e, value);
      }}
      renderOption={(props, option) => {
        return (
          <RawBox component='li' {...props} key={option}>
            {option}
          </RawBox>
        );
      }}
      renderInput={(params) => {
        return (
          <RawTextField
            {...(params as OutlinedTextFieldProps)}
            variant={'outlined'}
            size={size}
            label={label}
          />
        );
      }}
    />
  );
};
