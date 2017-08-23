import { random } from './random';
import { loremIpsum } from './helpers/lorem-ipsum';

/**
 * TODO:
 * 1) fix quality: same words one after another etc.
 * 2) add params to make more flexible
 */

export const lorem = (params?: LoremParams | number): string[] => {
  const defaults = {
    words: 10,
    sentences: 1
  };

  if (typeof params !== 'object') {
    if (typeof params === 'number') {
      defaults.words = params;
    }
    params = defaults;
  }

  const result: string[] = [];
  for (let n = 0; n < params.sentences; n++) {
    let sentence = '';
    for (let i = 0; i < params.words; i++) {
      switch (i) {
        case 0:
          sentence += `${capitalize(random(loremIpsum))} `;
          break;
        case params.words - 1:
          sentence += `${random(loremIpsum)}.`;
          break;
        default:
          sentence += `${random(loremIpsum)} `;
          break;
      }
    }
    result.push(sentence);
  }

  return result;
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export interface LoremParams {
  words: number;
  sentences: number;
}
