/**
 * rangen.js 0.0.1
 * https://github.com/otelnov/rangen
 * RanGen may be freely distributed under the MIT license.
 */

module.exports = {
  /**
   * return random alphanumeric string
   *
   * @param {Integer} length
   * @returns {String}
   */
  id: function(length, string) {
    var len = length || 7;
    var str = string || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var res = '';
    for (var i = 0; i < len; i++) {
      res += str.charAt(Math.floor(Math.random() * str.length));
    }
    return res;
  }
};