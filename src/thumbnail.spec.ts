import { thumb } from './thumbnail';

describe('thumbnail', () => {
  it('should return string', () => {
    expect(typeof thumb()).toEqual('string');
  });

  it('should create canvas', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'canvas');
    document.querySelector('body').appendChild(div);

    expect(document.querySelector('#canvas canvas')).toEqual(null);

    thumb({ selector: '#canvas' });

    expect(document.querySelector('#canvas canvas').nodeName).toEqual('CANVAS');
  });

  it('should create svg', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'svg');
    document.querySelector('body').appendChild(div);

    expect(document.querySelector('#svg svg')).toEqual(null);

    thumb({ selector: '#svg', svg: true });

    expect(document.querySelector('#svg svg').nodeName).toEqual('svg');
  });

  it('should fail if wrong selector provided', () => {
    expect(() => thumb({ selector: '#test' })).toThrowError();
  });
});
