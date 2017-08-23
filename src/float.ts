/* tslint:disable:no-magic-numbers */

export const float = (min?: number, max?: number, fixed?: number, str?: boolean): number | string => {
  min = min || 0;

  if (!max && min > 1) {
    max = Math.ceil(min);
  }
  max = max || max === 0 ? max : 1;

  if (typeof min !== 'number') {
    throw Error('Min should be a number');
  }
  if (typeof max !== 'number') {
    throw Error('Max should be a number');
  }
  if (min > max) {
    throw Error('Max should be greater then min');
  }

  let result: number | string = Math.random() * (max - min) + min;

  if (fixed || fixed === 0) {
    result = toFixed(result, fixed);
    if (!str) {
      result = parseFloat(result);
    }
  }

  return result;
};

function toFixed(value: number, precision: number): string {
  precision = precision || 0;
  const power = Math.pow(10, precision);
  const absValue = Math.abs(Math.round(value * power));

  let result = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));

  if (precision > 0) {
    const fraction = String(absValue % power);
    const padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
    result += `.${padding}${fraction}`;
  }

  return result;
}
