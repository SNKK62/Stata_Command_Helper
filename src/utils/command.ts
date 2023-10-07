export const makeCombinations: <T>(array: T[], count: number) => T[][] = <T>(
  array: T[],
  count: number,
) => {
  const length = array.length;
  const combinations: T[][] = [];
  for (let i = 0; i < 2 ** length; i++) {
    let flagged_count = 0;
    for (let j = 0; j < length; j++) {
      if ((i >> j) & 1) {
        flagged_count++;
      }
    }
    const temp_comb: T[] = [];
    if (flagged_count === count) {
      for (let j = 0; j < length; j++) {
        if ((i >> j) & 1) {
          temp_comb.push(array[j] as T);
        }
      }
    }
    if (temp_comb.length) {
      combinations.push(temp_comb);
    }
  }
  return combinations;
};

export const concatCombinations: <T>(...arrays: T[][][]) => T[][] = <T>(
  ...arrays: T[][][]
) => {
  const _makeCombination: <U>(array1: U[][], array2: U[][]) => U[][] = <U>(
    array1: U[][],
    array2: U[][],
  ) => {
    if (array1.length === 0) {
      return array2;
    }
    return array1.reduce((currentArray: U[][], newVal: U[]) => {
      array2.forEach((val: U[]) => {
        currentArray.push(([] as U[][]).concat(newVal, val) as U[]);
      });
      return currentArray;
    }, []);
  };

  return arrays.reduce(_makeCombination<T>, []);
};

export const makeCommand = (
  funcName: string,
  target: string,
  args: string[],
) => {
  if (funcName === 'reg') {
    return reg(target, args);
  }
  return '関数名が間違っています';
};

const reg = (target: string, args: string[]) => {
  return `reg ${target} ${args.join(' ')}`;
};
