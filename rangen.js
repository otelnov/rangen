/**
 * rangen.js 0.2.0
 * https://github.com/otelnov/rangen
 * RanGen may be freely distributed under the MIT license.
 */

(function (exports) {
  var ajax = {
    get: function get(url) {
      return new Promise(function (resolve, reject) {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
              resolve({
                data: JSON.parse(xmlhttp.responseText)
              });
            }
            reject(xmlhttp.status + ' error');
          }
        };

        xmlhttp.open('GET', url, true);
        xmlhttp.send();
      });
    }
  };

  if (typeof exports !== 'undefined' && typeof XMLHttpRequest === 'undefined') {
    ajax = require('axios');
  }

  /**
   * get random string
   *
   * @param {Number} [length=7] id length
   * @param {String} custom string
   * @returns {String}
   */
  exports.id = function (length, charSet, string) {
    var len = length || 7;
    var charSet = charSet || 'id';

    var num = '0123456789';
    var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var chars = '_-~!@#$%^&*()|}{?></';
    var hu = '-_';

    var sets = {
      n: num,
      a: alpha,
      c: chars,
      an: alpha + num,
      id: alpha + num + hu,
      m: alpha + num + chars
    };

    var str = sets[charSet];

    if (typeof string === 'string') {
      str = string;
    }

    var res = '';
    for (var i = 0; i < len; i++) {
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
  exports.num = function (min, max) {
    var min = min || 0;
    var max = max || 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /**
   * get random user using https://randomuser.me
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  exports.user = function (params, cb) {
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
      ajax.get(url)
        .then(function (response) {
          cb(null, response.data.results)
        })
        .catch(function (response) {
          cb(response);
        });
    } else {
      return ajax.get(url);
    }
  };

  /**
   * get random image using https://500px.com
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  exports.image = function (params, cb) {
    var key = params && params.key || 'ggx6QR2s9jYb5CuPIy2Mwg9wuwvbNYjxeworIqqP';
    var url = 'https://api.500px.com/v1/photos?consumer_key=' + key;

    if (typeof params === 'object') {
      for (var index in params) {
        if (params.hasOwnProperty(index) && index != 'key') {
          url += '&' + index + '=' + params[index]
        }
      }
    }

    if (typeof params === 'function') {
      cb = params;
    }

    if (typeof cb === 'function') {
      ajax.get(url)
        .then(function (response) {
          cb(null, response.data.photos)
        })
        .catch(function (response) {
          cb(response);
        });
    } else {
      return ajax.get(url);
    }
  };

  /**
   * lorem ipsum
   *
   * @param {number} count of paragraphs
   * @param {Function} [callback]
   */
  exports.lorem = function (count, cb) {
    var num = count;

    if (typeof count === 'function') {
      cb = count;
      num = 1;
    }
    var url = 'http://baconipsum.com/api/?type=meat-and-filler&paras=' + num;

    if (typeof cb === 'function') {
      ajax.get(url)
        .then(function (response) {
          cb(null, response.data)
        })
        .catch(function (response) {
          cb(response);
        });
    } else {
      return ajax.get(url);
    }
  };

  /**
   * ****************todo:**********************
   */

  /**
   * generate thumbs
   *
   * @param {{object}} params
   * @param {Function} [callback]
   *
   */
  //exports.thumb = function () {
  //  return '';
  //};

  // Star wars api http://swapi.co/

  /**
   * get random tweet
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  //exports.tweet = function () {
  //  return '';
  //};

  /**
   * get random youtube video
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  //exports.video = function () {
  //  return '';
  //};

  /**
   * get random text, word..
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  //exports.text = function () {
  //  return '';
  //};

})(typeof exports === 'undefined' ? this['rangen'] = {} : exports);
