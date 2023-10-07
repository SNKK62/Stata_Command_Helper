import { atom } from 'recoil';
export const commandState = atom<string>({
  key: 'command',
  default: 'reg',
});
