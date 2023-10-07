import { atom } from 'recoil';
export const targetState = atom<string>({
  key: 'target',
  default: 'aaa',
});
