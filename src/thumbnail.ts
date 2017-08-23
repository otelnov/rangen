/* tslint:disable:no-magic-numbers */

export const thumb = (thumbParams?: ThumbParams): string => {
  const params = buildParams(thumbParams);

  if (!params.svg) {
    return canvas(params);
  }

  if (params.svg) {
    return svg(params);
  }
};

function canvas(params: ThumbParams) {
  const canvas = document.createElement('canvas');
  canvas.width = params.width;
  canvas.height = params.height;

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = params.bgColor;
  ctx.fillRect(0, 0, params.width, params.height);

  ctx.strokeStyle = params.borderColor;
  ctx.strokeRect(0, 0, params.width, params.height);
  ctx.fillStyle = params.textColor;
  ctx.font = `${params.fontSize}px san-serif`;

  const textWidth = ctx.measureText(params.text).width;
  const tw = (params.width / 2) - (textWidth / 2);
  const th = (params.height / 2) + (params.fontSize / 3);

  ctx.fillText(params.text, tw, th);

  // TODO: allow multiline text
  // var lineHeight = ctx.measureText('M').width * 1.2;
  // var lines = params.text.split('\n');
  // for (var i = 0; i < lines.length; ++i) {
  //   ctx.fillText(lines[i], tw, th);
  //   th += lineHeight;
  // }

  if (params.selector) {
    const wp = document.querySelector(params.selector);
    wp.appendChild(canvas);

    return 'SUCCESS';
  }

  return canvas.toDataURL('image/png');
}

function svg(params: ThumbParams) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
  svg.setAttribute('width', params.width.toString());
  svg.setAttribute('height', params.height.toString());

  const rect = document.createElementNS(ns, 'rect');
  rect.setAttribute('width', params.width.toString());
  rect.setAttribute('height', params.height.toString());
  rect.setAttribute('fill', params.bgColor);
  rect.setAttribute('stroke', params.borderColor);
  // rect.setAttribute('stroke-width', '3');
  // rect.setAttribute('rx', '15');

  const text = document.createElementNS(ns, 'text');
  text.setAttribute('font-size', `${params.fontSize}px`);
  text.setAttribute('font-family', 'san-serif');
  text.setAttribute('fill', params.textColor);
  text.textContent = params.text;

  const wp = document.querySelector(params.selector);
  svg.appendChild(rect);
  svg.appendChild(text);
  wp.appendChild(svg);

  const tw = (params.width / 2) - (text.getBBox().width / 2);
  const th = (params.height / 2) + (params.fontSize / 3);
  text.setAttribute('x', tw.toString());
  text.setAttribute('y', th.toString());

  return 'SUCCESS';
}

let defaults: ThumbParams;

function buildParams(thumbParams: ThumbParams) {

  if (typeof document === 'undefined') {
    throw (new Error());
  }

  defaults = {
    width: 100,
    height: 100,
    bgColor: '#eee',
    textColor: '#555',
    borderColor: '#555',
    svg: false
  };

  if (typeof thumbParams === 'undefined' ||
    (Object.keys(thumbParams).length === 0 && thumbParams.constructor === Object)) {

    updateDependentParams();

    return defaults;
  }

  if (typeof thumbParams === 'object') {
    if (thumbParams.svg && !thumbParams.selector) {
      throw new Error('Selector is required');
    }
    if (thumbParams.selector && !document.querySelector(thumbParams.selector)) {
      throw new Error('Selector not found');
    }
    Object.keys(thumbParams).forEach(key => {
      defaults[key] = thumbParams[key];
    });
    updateDependentParams();

    return defaults;
  }
}

function updateDependentParams() {
  defaults.text = defaults.text || `${defaults.width}x${defaults.height}`;
  defaults.fontSize = defaults.fontSize ||
    (defaults.height < defaults.width ? defaults.height / 4 : defaults.width / 4);
}

export interface ThumbParams {
  width?: number;
  height?: number;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  text?: string;
  fontSize?: number;
  svg?: boolean;
  selector?: string;
  [key: string]: any;
}
