import { SyntheticEvent, useState } from 'react';
import { useRecoilState } from 'recoil';

import { requiredState } from '@/atoms/required';
import { MultipleAutocomplete, TextField } from '@/components/utils/input';
import { Stack } from '@/components/utils/stack';
import { variables } from '@/utils/constant';

export const RequiredInput: React.FC = () => {
  const [numRquired, setNumRequired] = useState('0');
  const [required, setRequired] = useRecoilState(requiredState);
  const onChange = (_: SyntheticEvent, values: string[]) => {
    let count = required.count;
    if (values.length < parseInt(numRquired)) {
      count = values.length;
      setNumRequired(values.length.toString());
    }
    setRequired({ count: count, value: values });
  };
  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      parseInt(e.target.value) < 0
        ? '0'
        : parseInt(e.target.value) > required.value.length
        ? required.value.length.toString()
        : e.target.value;
    setNumRequired(value);
    if (!isNaN(parseInt(value))) {
      setRequired((prevState) => ({ ...prevState, count: parseInt(value) }));
    }
  };
  return (
    <Stack direction='row'>
      <MultipleAutocomplete
        value={required.value}
        options={variables}
        onChange={(e, v) => {
          v && Array.isArray(v) && onChange(e, v);
        }}
        sx={{ width: 300 }}
      />
      <TextField
        onChange={(e) => {
          onInput(e);
        }}
        type='number'
        sx={{ width: 100 }}
        value={numRquired}
      />
    </Stack>
  );
};
