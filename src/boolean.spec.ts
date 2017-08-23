/* tslint:disable:no-magic-numbers no-unbound-method */

import { bool } from './boolean';

describe('boolean', () => {
  it('should return boolean', () => {
    expect(typeof bool()).toEqual('boolean');
  });

  it('should return boolean', () => {
    expect(typeof bool()).toEqual('boolean');
  });

  it('should return true if trueProbability 100', () => {
    for (let i = 0; i < 10; i++) {
      expect(bool(100)).toBeTruthy;
    }
  });

  it('should return false if trueProbability 0', () => {
    for (let i = 0; i < 10; i++) {
      expect(bool(0)).toBeFalsy;
    }
  });
});
