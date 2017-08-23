/* tslint:disable:no-magic-numbers */

import { float } from './float';

describe('float', () => {
  it('should return number', () => {
    const floatNumber = float();
    expect(typeof floatNumber).toEqual('number');
  });

  it('should use default values, from 0 - 1', () => {
    for (let i = 0; i < 10; i++) {
      const floatNumber = float();
      expect(floatNumber).toBeGreaterThanOrEqual(0);
      expect(floatNumber).toBeLessThanOrEqual(1);
    }
  });

  it('should work with min param', () => {
    for (let i = 0; i < 10; i++) {
      const floatNumber = float(0.25);
      expect(floatNumber).toBeGreaterThanOrEqual(0.25);
      expect(floatNumber).toBeLessThanOrEqual(1);
    }
  });

  it('should work with min param if it greater then default max', () => {
    for (let i = 0; i < 10; i++) {
      const floatNumber = float(45.25);
      expect(floatNumber).toBeGreaterThanOrEqual(45.25);
      expect(floatNumber).toBeLessThanOrEqual(46);
    }
  });

  it('should not work of min > max', () => {
    expect(() => float(33.66, 2.15)).toThrowError();
  });

  it('should work with min and max params', () => {
    for (let i = 0; i < 10; i++) {
      const floatNumber = float(50, 60);
      expect(floatNumber).toBeGreaterThanOrEqual(50);
      expect(floatNumber).toBeLessThanOrEqual(60);
    }
  });

  it('should work with negative float numbers', () => {
    for (let i = 0; i < 10; i++) {
      const floatNumber = float(-10.46, -5.33);
      expect(floatNumber).toBeGreaterThanOrEqual(-10.46);
      expect(floatNumber).toBeLessThanOrEqual(-5.33);
    }
  });

  it('should work with fixed param', () => {
    for (let i = 0; i < 10; i++) {
      const floatNumber = float(2.46123, 2.46123, 3);
      expect(floatNumber.toString().split('.')[1].length).toEqual(3);
    }
  });

  it('should work with fixed and string params', () => {
    for (let i = 0; i < 10; i++) {
      const str = float(2.46, 5, 4, true);
      expect(typeof str === 'string');
      expect((str as string).split('.')[1].length).toEqual(4);
    }
  });
});
