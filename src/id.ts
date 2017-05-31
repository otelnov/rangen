import { set } from './helpers/char.set';

export const id = (params?: IIdParams | number): string => {
  let length: number = 7;
  let charSet: string = 'alphanum';
  let str: string = set[charSet];

  if (typeof params === 'number') {
    length = params;
  }

  if (typeof params === 'object') {
    if (params.length && typeof params.length === 'number') {
      length = params.length;
    }
    if (params.charSet && typeof params.charSet === 'string') {
      if (typeof set[charSet] === 'undefined') {
        throw new Error('Wrong charSet');
      }
      charSet = params.charSet;
    }
    if (params.str && typeof params.str === 'string') {
      str = params.str;
    }
    if (params.charSet && !params.str) {
      str = set[charSet];
    }
  }

  if (length <= 0 || length > 9999) {
    throw new Error('Wrong length param, valid length 1 - 9999');
  }

  let res = '';
  for (let i = 0; i < length; i++) {
    res += str.charAt(Math.floor(Math.random() * str.length));
  }
  return res;
};

export interface IIdParams {
  length?: number;
  charSet?: string;
  str?: string;
}