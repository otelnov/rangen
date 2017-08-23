import { random } from './random';

export const avatar = (params?: AvatarParams): string => {
  const defaults: any = {
    width: 300,
    height: 300,
    size: 3,
    colors: ['#0A7B83', '#2AA876', '#FFD265', '#F19C65', '#CE4D45']
  };

  Object.keys(params).forEach(key => {
    defaults[key] = params[key];
  });

  params = defaults;

  const canvas = document.createElement('canvas');
  canvas.width = params.width;
  canvas.height = params.height;
  const ctx = canvas.getContext('2d');

  let xc = 0;
  let yc = 0;

  for (let y = 0; y < params.size; y++) {
    for (let x = 0; x < params.size; x++) {
      ctx.beginPath();
      ctx.fillStyle = random(params.colors);
      ctx.fillRect(xc, yc, params.width / params.size, params.height / params.size);
      xc += params.width / params.size;
      if ((x + 1) % params.size === 0) {
        xc = 0;
      }
    }
    yc += params.height / params.size;
  }

  return canvas.toDataURL('image/png');
};

export interface AvatarParams {
  width?: number;
  height?: number;
  size: number;
  colors: string[];
  [key: string]: any;
}
