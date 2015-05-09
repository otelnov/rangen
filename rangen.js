/**
 * rangen.js 0.0.2
 * https://github.com/otelnov/rangen
 * RanGen may be freely distributed under the MIT license.
 */

(function () {
  var axios = require('axios');

  /**
   * get random string
   *
   * @param {Number} [length=7] id length
   * @param {String} custom string
   * @returns {String}
   */
  this.id = function (length, charSet, string) {
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
  }

  /**
   * get random number
   *
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  this.num = function (min, max) {
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
  this.user = function (params, cb) {
    var url = 'http://api.randomuser.me/';
    var sep = '?';

    if (typeof params === 'function') {
      cb = params;
    }

    if (typeof params === 'number') {
      params = {count: params};
    }

    if (params.count) {
      sep = '&';
      url += '?results=' + params.count;
    }

    if (params.gender) {
      url += sep + 'gender=' + params.gender;
    }

    if (params.promise === true) {
      return axios.get(url);
    }

    axios.get(url)
      .then(function (response) {
        cb(null, response.data.results)
      })
      .catch(function (response) {
        cb(response);
      });
  };

  /**
   * get random image using https://500px.com
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  this.image = function (params, cb) {
    if (typeof params === 'function') {
      cb = params;
    }

    var url = 'https://api.500px.com/v1/photos?consumer_key=CCDtzPT3O0irMsPJ7DeX6YJCW1sd7P34c2upNUUJ';

    if (typeof params === 'object') {
      for (var index in params) {
        if (params.hasOwnProperty(index)) {
          url += '&' + index + '=' + params[index]
        }
      }
    }

    if (params.promise === true) {
      return axios.get(url);
    }

    axios.get(url)
      .then(function (response) {
        cb(null, response.data.photos)
      })
      .catch(function (response) {
        cb(response);
      });
  };

  /**
   * ****************todo:**********************
   */

  // Start wars api http://swapi.co/

  /**
   * get random tweet
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  this.tweet = function () {
    return '';
  };

  /**
   * get random youtube video
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  this.video = function () {
    return '';
  };

  /**
   * get random text
   *
   * @param {{number|object}} count or params
   * @param {Function} [callback]
   */
  this.text = function () {
    return '';
  };

}.call(this));
