import { id, IIdParams } from './id';

describe('id', () => {
  it('should return 7-char string using default params', () => {
    const testId = id();
    expect(typeof testId).toEqual('string');
    expect(testId.length).toEqual(7);
  });

  it('should return id with provided length', () => {
    const id1 = id(8);
    expect(id1.length).toEqual(8);
    const id2 = id(3);
    expect(id2.length).toEqual(3);
  });

  it('should return different value', () => {
    const id1 = id();
    const id2 = id();
    expect(id1).not.toEqual(id2);
  });

  it('should use correct set', () => {
    for (let i = 0; i < 10; i++) {
      const testId = id({ length: 14, charSet: 'alpha' });
      expect(testId.match(/\d+/g)).toEqual(null);
      const testId2 = id({ length: 14, charSet: 'num' });
      expect(testId2.match(/\d+/g)).not.toEqual(null);
    }
  });

  it('should not work with wrong length', () => {
    expect(() => id(0)).toThrowError();
    expect(() => id(-1)).toThrowError();
    expect(() => id(10000)).toThrowError();
  });

  it('should not work with wrong charSet', () => {
    expect(() => id({ charSet: 'test' })).toThrowError();
  });

  it('should use provided str if correct charSet also provided', () => {
    const testId = id({ length: 14, charSet: 'num', str: 'abcd' });
    expect(testId.match(/\d+/g)).toEqual(null);
  });
});
