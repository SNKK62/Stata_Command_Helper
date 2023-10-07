import { atom, atomFamily, selector } from 'recoil';

export const optionIdState = atom<number[]>({
  key: 'optionIds',
  default: [],
});

export interface optionType {
  value: string[];
  count: number;
}

export const optionState = atomFamily<optionType, number>({
  key: 'option',
  default: { value: [], count: 0 },
});

export const allOptionSelector = selector<optionType[]>({
  key: 'allOptions',
  get: ({ get }) => {
    const optionIds = get(optionIdState);
    const result: optionType[] = [];
    optionIds.forEach((id) => {
      const option = get(optionState(id));
      result.push(option);
    });
    return result;
  },
});
