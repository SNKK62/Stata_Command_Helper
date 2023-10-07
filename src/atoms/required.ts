import { atom } from 'recoil';

export interface requiredType {
  value: string[];
  count: number;
}
export const requiredState = atom<requiredType>({
  key: 'required',
  default: { value: [], count: 0 },
});
