import { useRecoilState } from 'recoil';

import { targetState } from '@/atoms/target';
import { Autocomplete } from '@/components/utils/input';
import { Stack } from '@/components/utils/stack';

export const TargetInput: React.FC = () => {
  const [target, setTarget] = useRecoilState(targetState);
  const onChange = (value: string) => {
    setTarget(value);
  };
  return (
    <Stack direction='row'>
      {`左辺: `}
      <Autocomplete
        options={['aaa', 'bbb', 'ccc']}
        value={target}
        onChange={(_, v) => onChange(v as string)}
        sx={{ paddingLeft: 2, width: '350px' }}
      />
    </Stack>
  );
};
