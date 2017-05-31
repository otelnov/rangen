const numeric = '0123456789';
const alphabetic = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '_-~!@#$%^&*()|}{?></';
const dash = '-_';

interface Set {
  num: string;
  alpha: string;
  sym: string;
  alphanum: string;
  all: string;
  [key: string]: string;
}

export const set: Set = {
  num: numeric,
  alpha: alphabetic,
  sym: symbols,
  alphanum: alphabetic + numeric,
  all: alphabetic + numeric + symbols + dash
};
