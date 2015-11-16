(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else if(typeof exports === 'object')
		exports["rangen"] = factory(require("axios"));
	else
		root["rangen"] = factory(root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	/**
	 * rangen.js 0.3.0
	 * https://github.com/otelnov/rangen
	 * RanGen may be freely distributed under the MIT license.
	 */

	(function (rangen) {

	  var request = {
	    get: function get(url) {
	      return new Promise(function (resolve, reject) {
	        var xmlhttp = new window.XMLHttpRequest();

	        xmlhttp.onreadystatechange = function () {
	          if (xmlhttp.readyState === window.XMLHttpRequest.DONE) {
	            if (xmlhttp.status === 200) {
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
	    request = __webpack_require__(1);
	  }

	  /**
	   * get random string
	   *
	   * @param {Number} [length=7] id length
	   * @param {String} char set
	   * @param {String} custom string
	   * @returns {String}
	   */
	  var n = '0123456789';
	  var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	  var c = '_-~!@#$%^&*()|}{?></';
	  var d = '-_';
	  var sets = {
	    n: n, a: a, c: c,
	    an: a + n,
	    id: a + n + d,
	    m: a + n + c + d
	  };
	  rangen.id = function () {
	    var length = arguments.length <= 0 || arguments[0] === undefined ? 7 : arguments[0];
	    var charSet = arguments.length <= 1 || arguments[1] === undefined ? 'id' : arguments[1];
	    var str = arguments.length <= 2 || arguments[2] === undefined ? sets[charSet] : arguments[2];

	    var res = '';
	    for (var i = 0; i < length; i++) {
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
	  rangen.num = function () {
	    var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var max = arguments.length <= 1 || arguments[1] === undefined ? 9999 : arguments[1];
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  };

	  /**
	   * get random boolean
	   * @returns {boolean}
	   */
	  rangen.bool = function () {
	    return Math.floor(Math.random() * 2) === 0;
	  };

	  /**
	   * return random element from provided array
	   */
	  rangen.random = function (array) {
	    var n = rangen.num(0, array.length - 1);
	    return array[n];
	  };

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
	      params = { count: params };
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
	      request.get(url).then(function (response) {
	        return cb(null, response.data.results);
	      }).catch(function (response) {
	        return cb(response);
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

	    if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
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
	      request.get(url).then(function (response) {
	        return cb(null, response.data.photos);
	      }).catch(function (response) {
	        return cb(response);
	      });
	    } else {
	      return request.get(url);
	    }
	  };

	  /**
	   * lorem ipsum
	   *
	   * @param {number} count of sentences
	   * @param {Function} [callback]
	   */
	  rangen.lorem = rangen.text = function (count, cb) {
	    var num = count;

	    if (typeof count === 'function') {
	      cb = count;
	      num = 1;
	    }

	    var url = 'https://telnov.com/api/gena/ran-text/' + num;

	    if (typeof cb === 'function') {
	      request.get(url).then(function (response) {
	        return cb(null, response.data.data);
	      }).catch(function (response) {
	        return cb(response);
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
	    if ((typeof w === 'undefined' ? 'undefined' : _typeof(w)) === 'object') {
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

	    if (typeof document === 'undefined') {
	      return 'thumb() works only in browser';
	    }

	    var canvas = document.createElement('canvas');
	    canvas.width = w;
	    canvas.height = h;

	    var ctx = canvas.getContext('2d');

	    ctx.fillStyle = bg;
	    ctx.fillRect(0, 0, w, h);

	    ctx.strokeStyle = color;
	    ctx.strokeRect(0, 0, w, h);
	    ctx.fillStyle = color;
	    ctx.font = size + 'px san-serif';

	    var textWidth = ctx.measureText(text).width;
	    var tw = w / 2 - textWidth / 2;
	    var th = h / 2 + size / 3;
	    ctx.fillText(text, tw, th);

	    var base64 = canvas.toDataURL('image/png');
	    return base64;
	  };
	})(exports);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ }
/******/ ])
});
;