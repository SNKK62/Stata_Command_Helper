import { SyntheticEvent, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { optionState, optionIdState } from '@/atoms/option';
import { Button } from '@/components/utils/button';
import { MultipleAutocomplete, TextField } from '@/components/utils/input';
import { Stack } from '@/components/utils/stack';
import { variables } from '@/utils/constant';

interface OptionInputProps {
  id: number;
}
const OptionInput: React.FC<OptionInputProps> = ({ id }) => {
  const setOptionIds = useSetRecoilState(optionIdState);
  const [option, setOption] = useRecoilState(optionState(id));
  const [numOption, setNumOption] = useState<string>(option.count.toString());
  const onChange = (_: SyntheticEvent, values: string[]) => {
    let count = option.count;
    if (values.length < parseInt(numOption)) {
      count = values.length;
      setNumOption(values.length.toString());
    }
    setOption({ count: count, value: values });
  };
  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      parseInt(e.target.value) < 0
        ? '0'
        : parseInt(e.target.value) > option.value.length
        ? option.value.length.toString()
        : e.target.value;
    setNumOption(value);
    if (!isNaN(parseInt(value))) {
      setOption((prevState) => ({ ...prevState, count: parseInt(value) }));
    }
  };
  const onClick = () => {
    setOptionIds((prevState) =>
      prevState.filter((optionId) => optionId !== id),
    );
    setOption({ value: [], count: 0 });
  };

  return (
    <Stack direction='row'>
      <MultipleAutocomplete
        value={option.value}
        options={variables}
        onChange={(e, v) => {
          v && Array.isArray(v) && onChange(e, v);
        }}
        sx={{ width: 300 }}
      />
      <TextField
        type='number'
        value={numOption}
        onChange={(e) => onInput(e)}
        sx={{ width: 100 }}
      />
      <Button onClick={onClick} color={'error'}>
        {'削除'}
      </Button>
    </Stack>
  );
};

export const OptionInputs: React.FC = () => {
  const [optionIds, setOptionIds] = useRecoilState(optionIdState);
  const InputList: React.FC = () => {
    return (
      <>
        {optionIds.map((optionId) => {
          return <OptionInput id={optionId} key={optionId} />;
        })}
      </>
    );
  };
  const onClick = () => {
    const newId = optionIds.length ? (optionIds.slice(-1)[0] as number) + 1 : 0;
    setOptionIds((prevState) => [...prevState, newId]);
  };
  return (
    <Stack>
      <InputList />
      <Button onClick={onClick}>追加</Button>
    </Stack>
  );
};
