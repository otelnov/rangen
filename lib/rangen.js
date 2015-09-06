/**
 * rangen.js 0.2.3
 * https://github.com/otelnov/rangen
 * RanGen may be freely distributed under the MIT license.
 */

(function (rangen) {
  /**
   * get random string
   *
   * @param {Number} [length=7] id length
   * @param {String} char set
   * @param {String} custom string
   * @returns {String}
   */
  const n = '0123456789';
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const c = '_-~!@#$%^&*()|}{?></';
  const d = '-_';
  const sets = {
    n, a, c,
    an: a + n,
    id: a + n + d,
    m: a + n + c + d
  };
  rangen.id = (length = 7, charSet = 'id', str = sets[charSet]) => {
    let res = '';
    for (let i = 0; i < length; i++) {
      res += str.charAt(Math.floor(Math.random() * str.length));
    }
    return res;
  };

  /**
   * get random number
   *
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  rangen.num = (min = 0, max = 9999) => Math.floor(Math.random() * (max - min + 1)) + min;

  /**
   * get random user using https://randomuser.me
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  rangen.user = function (params, cb) {
    var url = 'http://api.randomuser.me/';
    var sep = '?';

    if (typeof params === 'number') {
      params = {count: params};
    }

    if (params && params.count) {
      sep = '&';
      url += '?results=' + params.count;
    }

    if (params && params.gender) {
      url += sep + 'gender=' + params.gender;
    }

    if (typeof params === 'function') {
      cb = params;
    }

    if (typeof cb === 'function') {
      request.get(url)
        .then(response => {
          cb(null, response.data.results);
        })
        .catch(response => {
          cb(response);
        });
    } else {
      return request.get(url);
    }
  };

  /**
   * get random image using https://500px.com
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  rangen.image = function (params, cb) {
    var key = params && params.key || 'ggx6QR2s9jYb5CuPIy2Mwg9wuwvbNYjxeworIqqP';
    var url = 'https://api.500px.com/v1/photos?consumer_key=' + key;

    if (typeof params === 'object') {
      for (var index in params) {
        if (params.hasOwnProperty(index) && index !== 'key') {
          url += '&' + index + '=' + params[index];
        }
      }
    }

    if (typeof params === 'function') {
      cb = params;
    }

    if (typeof cb === 'function') {
      request.get(url)
        .then(response => {
          cb(null, response.data.photos);
        })
        .catch(response => {
          cb(response);
        });
    } else {
      return request.get(url);
    }
  };

  /**
   * lorem ipsum
   *
   * @param {number} count of paragraphs
   * @param {Function} [callback]
   */
  rangen.lorem = function (count, cb) {
    var num = count;

    if (typeof count === 'function') {
      cb = count;
      num = 1;
    }
    var url = 'http://baconipsum.com/api/?type=meat-and-filler&paras=' + num;

    if (typeof cb === 'function') {
      request.get(url)
        .then(response => {
          cb(null, response.data);
        })
        .catch(response => {
          cb(response);
        });
    } else {
      return request.get(url);
    }
  };

  /**
   * generate thumbs
   *
   * @param {{number|object}} width or params
   * @param {number} height
   * @param {string} background
   * @param {string} color
   * @param {string} text
   * @param {string} font size
   * @returns {string}
   */
  rangen.thumb = function (w, h, bg, color, text, size) {
    if (typeof w === 'object') {
      var params = w;
      w = params.width;
      h = params.height;
      bg = params.background;
      color = params.color;
      text = params.text;
      size = params.size;
    }

    w = w || 100;
    h = h || 100;
    bg = bg || '#eee';
    color = color || '#555';
    text = text === '' ? '' : text || w + 'x' + h;
    size = size || (h < w ? h / 4 : w / 4);

    var canvas;

    if (typeof document === 'undefined') {
      return 'thumb() works only in browser';
    } else {
      canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
    }

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = color;
    ctx.strokeRect(0, 0, w, h);
    ctx.fillStyle = color;
    ctx.font = size + 'px san-serif';

    var textWidth = ctx.measureText(text).width;
    var tw = (w / 2) - (textWidth / 2);
    var th = (h / 2) + (size / 3);
    ctx.fillText(text, tw, th);

    var base64 = canvas.toDataURL('image/png');
    return base64;
  };

})(exports);
