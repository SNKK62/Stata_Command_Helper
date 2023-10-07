'use client';
import { RecoilRoot } from 'recoil';

import { FuncInput } from '@/components/func';
import { OptionInputs } from '@/components/option';
import { RequiredInput } from '@/components/required';
import { Result } from '@/components/result';
import { TargetInput } from '@/components/target';
import { Stack } from '@/components/utils/stack';

export default function Home() {
  return (
    <RecoilRoot>
      <Stack justifyContent='center'>
        <FuncInput />
        <TargetInput />
        <RequiredInput />
        <OptionInputs />
        <Result />
      </Stack>
    </RecoilRoot>
  );
}
