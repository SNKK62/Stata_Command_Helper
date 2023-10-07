import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { commandState } from '@/atoms/command';
import { allOptionSelector } from '@/atoms/option';
import { requiredState } from '@/atoms/required';
import { targetState } from '@/atoms/target';
import { Button } from '@/components/utils/button';
import {
  concatCombinations,
  makeCombinations,
  makeCommand,
} from '@/utils/command';

export const Result: React.FC = () => {
  const required = useRecoilValue(requiredState);
  const allOptions = useRecoilValue(allOptionSelector);
  const target = useRecoilValue(targetState);
  const funcName = useRecoilValue(commandState);
  const [results, setResults] = useState<string>('');

  const onClick = () => {
    const combinations = [makeCombinations(required.value, required.count)];
    allOptions.forEach((option) => {
      combinations.push(makeCombinations(option.value, option.count));
    });
    const command = (result: string, array: string[]) => {
      const ans = `${result}${makeCommand(funcName, target, array)}\n`;
      return ans;
    };
    const result = concatCombinations(...combinations).reduce(command, '');
    setResults(result);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(result).then(() => {
        console.log(result);
      });
    }
  };
  return (
    <>
      <Button color='success' variant='outlined' onClick={onClick}>
        出力
      </Button>
      <div>
        {results.split(`\n`).map((result, i) => {
          return <p key={i}>{result}</p>;
        })}
      </div>
    </>
  );
};
