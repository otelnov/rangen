/* tslint:disable:no-magic-numbers */

import { int } from './index';

export const bool = (trueProbability?: number): boolean => {
  if (typeof trueProbability === 'undefined') {
    return Math.floor(Math.random() * 2) === 0;
  }

  if (typeof trueProbability !== 'number' || trueProbability < 0 || trueProbability > 100) {
    throw Error('trueProbability should be a number from 0 - 100');
  }

  const num: number = int(1, 100);

  return num <= trueProbability;
};
