import { useRecoilState } from 'recoil';

import { commandState } from '@/atoms/command';
import { Autocomplete } from '@/components/utils/input';
import { Stack } from '@/components/utils/stack';

export const FuncInput: React.FC = () => {
  const [command, setCommand] = useRecoilState(commandState);
  const onChange = (value: string) => {
    setCommand(value);
  };
  return (
    <Stack direction='row'>
      {`関数名: `}
      <Autocomplete
        options={['reg', 'reg2', 'reg3']}
        value={command}
        onChange={(_, v) => onChange(v as string)}
        sx={{ paddingLeft: 2, width: '350px' }}
      />
    </Stack>
  );
};
