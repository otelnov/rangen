/* tslint:disable:no-magic-numbers */

import { num } from './number';

describe('number', () => {
  it('should return number', () => {
    const numb = num();
    expect(typeof numb).toEqual('number');
  });

  it('should use default values, from 0 - 9999', () => {
    for (let i = 0; i < 10; i++) {
      const numb = num();
      expect(numb).toBeGreaterThanOrEqual(0);
      expect(numb).toBeLessThanOrEqual(9999);
    }
  });

  it('should work with min param', () => {
    for (let i = 0; i < 10; i++) {
      const numb = num(9990);
      expect(numb).toBeGreaterThanOrEqual(9990);
      expect(numb).toBeLessThanOrEqual(9999);
    }
  });

  it('should work with min and max params', () => {
    for (let i = 0; i < 10; i++) {
      const numb = num(50, 60);
      expect(numb).toBeGreaterThanOrEqual(50);
      expect(numb).toBeLessThanOrEqual(60);
    }
  });

  it('should work with min = 0', () => {
    for (let i = 0; i < 10; i++) {
      const numb = num(0, 5);
      expect(numb).toBeGreaterThanOrEqual(0);
      expect(numb).toBeLessThanOrEqual(5);
    }
  });

  it('should work with max = 0', () => {
    for (let i = 0; i < 10; i++) {
      const numb = num(-5, 0);
      expect(numb).toBeGreaterThanOrEqual(-5);
      expect(numb).toBeLessThanOrEqual(0);
    }
  });

  it('should work with negative numbers', () => {
    for (let i = 0; i < 10; i++) {
      const numb = num(-10, -5);
      expect(numb).toBeGreaterThanOrEqual(-10);
      expect(numb).toBeLessThanOrEqual(-5);
    }
  });

  it('should not work of min > max', () => {
    expect(() => num(33, 2)).toThrowError();
  });
});
