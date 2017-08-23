import { num } from './number';

// TODO: random object prop
export const random = (array: any[]): any => {
  const n = num(0, array.length - 1);

  return array[n];
};
