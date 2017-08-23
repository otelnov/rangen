/* tslint:disable:no-magic-numbers */

import { random } from './random';
import { num } from './number';
import { bool } from './boolean';
import { id } from './id';
import { femaleFirstNames } from './helpers/female-first-names';
import { maleFirstNames } from './helpers/male-first-names';
import { lastNames } from './helpers/last-names';

export const user = (params?: UserParams): User[] => {
  const count = (params && params.count) ? params.count : 1;
  const gen = (params && params.gender) ? params.gender : 'any';
  const minA = (params && params.minAge) ? params.minAge : 18;
  const maxA = (params && params.maxAge) ? params.maxAge : 55;

  const results: User[] = [];

  for (let i = 0; i < count; i++) {
    const gender = gen === 'any' ? random(['male', 'female']) : gen;
    const first = random(gender === 'male' ? maleFirstNames : femaleFirstNames);
    const last = random(lastNames);
    const age = num(minA, maxA);
    results.push({
      gender,
      name: {
        title: gender === 'male' ? 'mr' : 'mrs',
        first,
        last
      },
      email: `${first}.${last}@example.com`.toLowerCase(),
      age,
      dob: getDob(age),
      registered: getRegistered(),
      phone: `${num(100, 999)}-${num(100, 999)}-${num(1000)}`,
      id: id()
      // location:
      // username: '',
      // password: '',
      // nat: '',
      // picture: {}
    });
  }

  return results;
};

function getDob(age: number) {

  function daysInMonth(y: number, m: number): number {
    return new Date(y, m, 0).getDate();
  }

  const date = new Date();

  // already had BD this year
  let year = date.getFullYear() - age;
  let month = num(0, date.getMonth());
  let day = num(1, daysInMonth(year, month + 1));
  if (month === date.getMonth()) {
    day = num(1, date.getDate());
  }

  // did not have BD this year
  if (bool()) {
    year = year - 1;
    month = num(date.getMonth(), 11);
    day = num(1, daysInMonth(year, month + 1));
    if (month === date.getMonth()) {
      day = num(date.getDate(), daysInMonth(year, month + 1));
    }
  }

  return new Date(year, month, day);
}

function getRegistered() {
  // from 1min to 3years
  const timestamp = num(1000 * 60, 60 * 60 * 24 * 365 * 1000 * 3);
  const now = new Date().getTime();

  return new Date(now - timestamp);
}

export interface User {
  gender: string;
  name: {
    title: string,
    first: string;
    last: string;
  };
  email: string;
  age: number;
  dob: Date;
  registered: Date;
  phone: string;
  id: string;
}

export interface UserParams {
  count?: number;
  gender?: 'male' | 'female' | 'any';
  minAge?: number;
  maxAge?: number;
}
