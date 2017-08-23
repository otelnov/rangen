const maxNum = 9999;

export const num = (min?: number, max?: number): number => {
  min = min || 0;
  max = max || max === 0 ? max : maxNum;

  if (typeof min !== 'number') {
    throw Error('Min should be a number');
  }
  if (typeof max !== 'number') {
    throw Error('Max should be a number');
  }
  if (min > max) {
    throw Error('Max should be greater then min');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
