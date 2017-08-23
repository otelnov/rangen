import { random } from './random';

describe('random', () => {
  it('should return random array element', () => {
    const ran = random(['a', 'b']);
    expect(typeof ran).toEqual('string');
    expect(ran === 'a' || ran === 'b').toBe(true);
    expect(ran === 'a' && ran === 'b').toBe(false);
  });

  // it('should return random object property', () => {

  // });

  // it('should fail with an empty array', () => {

  // });

  // it('should fail with an empty object', () => {

  // });
});
