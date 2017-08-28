var rangen =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var maxNum = 9999;
exports.num = function (min, max) {
    min = min || 0;
    max = max || max === 0 ? max : maxNum;
    if (typeof min !== 'number') {
        throw Error('Min should be a number');
    }
    if (typeof max !== 'number') {
        throw Error('Max should be a number');
    }
    if (min > max) {
        throw Error('Max should be greater then min');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = __webpack_require__(0);
// TODO: random object prop
exports.random = function (array) {
    var n = number_1.num(0, array.length - 1);
    return array[n];
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-magic-numbers */
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
exports.bool = function (trueProbability) {
    if (typeof trueProbability === 'undefined') {
        return Math.floor(Math.random() * 2) === 0;
    }
    if (typeof trueProbability !== 'number' || trueProbability < 0 || trueProbability > 100) {
        throw Error('trueProbability should be a number from 0 - 100');
    }
    var num = index_1.int(1, 100);
    return num <= trueProbability;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var char_set_1 = __webpack_require__(11);
var maxLength = 9999;
exports.id = function (params) {
    var length = 7;
    var charSet = 'alphanum';
    var str = char_set_1.set[charSet];
    if (typeof params === 'number') {
        length = params;
    }
    if (typeof params === 'object') {
        if (params.length && typeof params.length === 'number') {
            length = params.length;
        }
        if (params.charSet && typeof params.charSet === 'string') {
            if (typeof char_set_1.set[charSet] === 'undefined') {
                throw new Error('Wrong charSet');
            }
            charSet = params.charSet;
        }
        if (params.str && typeof params.str === 'string') {
            str = params.str;
        }
        if (params.charSet && !params.str) {
            str = char_set_1.set[charSet];
        }
    }
    if (length <= 0 || length > maxLength) {
        throw new Error('Wrong length param, valid length 1 - 9999');
    }
    var res = '';
    for (var i = 0; i < length; i++) {
        res += str.charAt(Math.floor(Math.random() * str.length));
    }
    return res;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var id_1 = __webpack_require__(3);
exports.id = id_1.id;
exports.password = id_1.id;
var number_1 = __webpack_require__(0);
exports.num = number_1.num;
exports.int = number_1.num;
var float_1 = __webpack_require__(6);
exports.float = float_1.float;
var boolean_1 = __webpack_require__(2);
exports.bool = boolean_1.bool;
exports.boolean = boolean_1.bool;
var thumbnail_1 = __webpack_require__(9);
exports.thumb = thumbnail_1.thumb;
exports.thumbnail = thumbnail_1.thumb;
var user_1 = __webpack_require__(10);
exports.user = user_1.user;
var image_1 = __webpack_require__(7);
exports.image = image_1.image;
var lorem_1 = __webpack_require__(8);
exports.lorem = lorem_1.lorem;
exports.text = lorem_1.lorem;
var avatar_1 = __webpack_require__(5);
exports.avatar = avatar_1.avatar;
exports.ava = avatar_1.avatar;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __webpack_require__(1);
exports.avatar = function (params) {
    var defaults = {
        width: 300,
        height: 300,
        size: 3,
        colors: ['#0A7B83', '#2AA876', '#FFD265', '#F19C65', '#CE4D45']
    };
    Object.keys(params).forEach(function (key) {
        defaults[key] = params[key];
    });
    params = defaults;
    var canvas = document.createElement('canvas');
    canvas.width = params.width;
    canvas.height = params.height;
    var ctx = canvas.getContext('2d');
    var xc = 0;
    var yc = 0;
    for (var y = 0; y < params.size; y++) {
        for (var x = 0; x < params.size; x++) {
            ctx.beginPath();
            ctx.fillStyle = random_1.random(params.colors);
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-magic-numbers */
Object.defineProperty(exports, "__esModule", { value: true });
exports.float = function (min, max, fixed, str) {
    min = min || 0;
    if (!max && min > 1) {
        max = Math.ceil(min);
    }
    max = max || max === 0 ? max : 1;
    if (typeof min !== 'number') {
        throw Error('Min should be a number');
    }
    if (typeof max !== 'number') {
        throw Error('Max should be a number');
    }
    if (min > max) {
        throw Error('Max should be greater then min');
    }
    var result = Math.random() * (max - min) + min;
    if (fixed || fixed === 0) {
        result = toFixed(result, fixed);
        if (!str) {
            result = parseFloat(result);
        }
    }
    return result;
};
function toFixed(value, precision) {
    precision = precision || 0;
    var power = Math.pow(10, precision);
    var absValue = Math.abs(Math.round(value * power));
    var result = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));
    if (precision > 0) {
        var fraction = String(absValue % power);
        var padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
        result += "." + padding + fraction;
    }
    return result;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.image = function (params) {
    var url = 'https://api.500px.com/v1/photos?consumer_key=ggx6QR2s9jYb5CuPIy2Mwg9wuwvbNYjxeworIqqP';
    if (typeof params === 'object') {
        for (var i in params) {
            if (params.hasOwnProperty(i) && i !== 'key') {
                url += "&" + i + "=" + params[i];
            }
        }
    }
    // TODO: check if fetch available if not, use xmlhttprequest
    return fetch(url).then(function (response) { return response.json(); });
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __webpack_require__(1);
var lorem_ipsum_1 = __webpack_require__(14);
/**
 * TODO:
 * 1) fix quality: same words one after another etc.
 * 2) add params to make more flexible
 */
exports.lorem = function (params) {
    var defaults = {
        words: 10,
        sentences: 1
    };
    if (typeof params !== 'object') {
        if (typeof params === 'number') {
            defaults.words = params;
        }
        params = defaults;
    }
    var result = [];
    for (var n = 0; n < params.sentences; n++) {
        var sentence = '';
        for (var i = 0; i < params.words; i++) {
            switch (i) {
                case 0:
                    sentence += capitalize(random_1.random(lorem_ipsum_1.loremIpsum)) + " ";
                    break;
                case params.words - 1:
                    sentence += random_1.random(lorem_ipsum_1.loremIpsum) + ".";
                    break;
                default:
                    sentence += random_1.random(lorem_ipsum_1.loremIpsum) + " ";
                    break;
            }
        }
        result.push(sentence);
    }
    return result;
};
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-magic-numbers */
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumb = function (thumbParams) {
    var params = buildParams(thumbParams);
    if (!params.svg) {
        return canvas(params);
    }
    if (params.svg) {
        return svg(params);
    }
};
function canvas(params) {
    var canvas = document.createElement('canvas');
    canvas.width = params.width;
    canvas.height = params.height;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = params.bgColor;
    ctx.fillRect(0, 0, params.width, params.height);
    ctx.strokeStyle = params.borderColor;
    ctx.strokeRect(0, 0, params.width, params.height);
    ctx.fillStyle = params.textColor;
    ctx.font = params.fontSize + "px san-serif";
    var textWidth = ctx.measureText(params.text).width;
    var tw = (params.width / 2) - (textWidth / 2);
    var th = (params.height / 2) + (params.fontSize / 3);
    ctx.fillText(params.text, tw, th);
    // TODO: allow multiline text
    // var lineHeight = ctx.measureText('M').width * 1.2;
    // var lines = params.text.split('\n');
    // for (var i = 0; i < lines.length; ++i) {
    //   ctx.fillText(lines[i], tw, th);
    //   th += lineHeight;
    // }
    if (params.selector) {
        var wp = document.querySelector(params.selector);
        wp.appendChild(canvas);
        return 'SUCCESS';
    }
    return canvas.toDataURL('image/png');
}
function svg(params) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
    svg.setAttribute('width', params.width.toString());
    svg.setAttribute('height', params.height.toString());
    var rect = document.createElementNS(ns, 'rect');
    rect.setAttribute('width', params.width.toString());
    rect.setAttribute('height', params.height.toString());
    rect.setAttribute('fill', params.bgColor);
    rect.setAttribute('stroke', params.borderColor);
    // rect.setAttribute('stroke-width', '3');
    // rect.setAttribute('rx', '15');
    var text = document.createElementNS(ns, 'text');
    text.setAttribute('font-size', params.fontSize + "px");
    text.setAttribute('font-family', 'san-serif');
    text.setAttribute('fill', params.textColor);
    text.textContent = params.text;
    var wp = document.querySelector(params.selector);
    svg.appendChild(rect);
    svg.appendChild(text);
    wp.appendChild(svg);
    var tw = (params.width / 2) - (text.getBBox().width / 2);
    var th = (params.height / 2) + (params.fontSize / 3);
    text.setAttribute('x', tw.toString());
    text.setAttribute('y', th.toString());
    return 'SUCCESS';
}
var defaults;
function buildParams(thumbParams) {
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
        Object.keys(thumbParams).forEach(function (key) {
            defaults[key] = thumbParams[key];
        });
        updateDependentParams();
        return defaults;
    }
}
function updateDependentParams() {
    defaults.text = defaults.text || defaults.width + "x" + defaults.height;
    defaults.fontSize = defaults.fontSize ||
        (defaults.height < defaults.width ? defaults.height / 4 : defaults.width / 4);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-magic-numbers */
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __webpack_require__(1);
var number_1 = __webpack_require__(0);
var boolean_1 = __webpack_require__(2);
var id_1 = __webpack_require__(3);
var female_first_names_1 = __webpack_require__(12);
var male_first_names_1 = __webpack_require__(15);
var last_names_1 = __webpack_require__(13);
exports.user = function (params) {
    var count = (params && params.count) ? params.count : 1;
    var gen = (params && params.gender) ? params.gender : 'any';
    var minA = (params && params.minAge) ? params.minAge : 18;
    var maxA = (params && params.maxAge) ? params.maxAge : 55;
    var results = [];
    for (var i = 0; i < count; i++) {
        var gender = gen === 'any' ? random_1.random(['male', 'female']) : gen;
        var first = random_1.random(gender === 'male' ? male_first_names_1.maleFirstNames : female_first_names_1.femaleFirstNames);
        var last = random_1.random(last_names_1.lastNames);
        var age = number_1.num(minA, maxA);
        results.push({
            gender: gender,
            name: {
                title: gender === 'male' ? 'mr' : 'mrs',
                first: first,
                last: last
            },
            email: (first + "." + last + "@example.com").toLowerCase(),
            age: age,
            dob: getDob(age),
            registered: getRegistered(),
            phone: number_1.num(100, 999) + "-" + number_1.num(100, 999) + "-" + number_1.num(1000),
            id: id_1.id()
            // location:
            // username: '',
            // password: '',
            // nat: '',
            // picture: {}
        });
    }
    return results;
};
function getDob(age) {
    function daysInMonth(y, m) {
        return new Date(y, m, 0).getDate();
    }
    var date = new Date();
    // already had BD this year
    var year = date.getFullYear() - age;
    var month = number_1.num(0, date.getMonth());
    var day = number_1.num(1, daysInMonth(year, month + 1));
    if (month === date.getMonth()) {
        day = number_1.num(1, date.getDate());
    }
    // did not have BD this year
    if (boolean_1.bool()) {
        year = year - 1;
        month = number_1.num(date.getMonth(), 11);
        day = number_1.num(1, daysInMonth(year, month + 1));
        if (month === date.getMonth()) {
            day = number_1.num(date.getDate(), daysInMonth(year, month + 1));
        }
    }
    return new Date(year, month, day);
}
function getRegistered() {
    // from 1min to 3years
    var timestamp = number_1.num(1000 * 60, 60 * 60 * 24 * 365 * 1000 * 3);
    var now = new Date().getTime();
    return new Date(now - timestamp);
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var numeric = '0123456789';
var alphabetic = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = '_-~!@#$%^&*()|}{?></';
var dash = '-_';
exports.set = {
    num: numeric,
    alpha: alphabetic,
    sym: symbols,
    alphanum: alphabetic + numeric,
    all: alphabetic + numeric + symbols + dash
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:max-file-line-count */
Object.defineProperty(exports, "__esModule", { value: true });
exports.femaleFirstNames = [
    'Mary',
    'Patricia',
    'Linda',
    'Barbara',
    'Elizabeth',
    'Jennifer',
    'Maria',
    'Susan',
    'Margaret',
    'Dorothy',
    'Lisa',
    'Nancy',
    'Karen',
    'Betty',
    'Helen',
    'Sandra',
    'Donna',
    'Carol',
    'Ruth',
    'Sharon',
    'Michelle',
    'Laura',
    'Sarah',
    'Kimberly',
    'Deborah',
    'Jessica',
    'Shirley',
    'Cynthia',
    'Angela',
    'Melissa',
    'Brenda',
    'Amy',
    'Anna',
    'Rebecca',
    'Virginia',
    'Kathleen',
    'Pamela',
    'Martha',
    'Debra',
    'Amanda',
    'Stephanie',
    'Carolyn',
    'Christine',
    'Marie',
    'Janet',
    'Catherine',
    'Frances',
    'Ann',
    'Joyce',
    'Diane',
    'Alice',
    'Julie',
    'Heather',
    'Teresa',
    'Doris',
    'Gloria',
    'Evelyn',
    'Jean',
    'Cheryl',
    'Mildred',
    'Katherine',
    'Joan',
    'Ashley',
    'Judith',
    'Rose',
    'Janice',
    'Kelly',
    'Nicole',
    'Judy',
    'Christina',
    'Kathy',
    'Theresa',
    'Beverly',
    'Denise',
    'Tammy',
    'Irene',
    'Jane',
    'Lori',
    'Rachel',
    'Marilyn',
    'Andrea',
    'Kathryn',
    'Louise',
    'Sara',
    'Anne',
    'Jacqueline',
    'Wanda',
    'Bonnie',
    'Julia',
    'Ruby',
    'Lois',
    'Tina',
    'Phyllis',
    'Norma',
    'Paula',
    'Diana',
    'Annie',
    'Lillian',
    'Emily',
    'Robin',
    'Peggy',
    'Crystal',
    'Gladys',
    'Rita',
    'Dawn',
    'Connie',
    'Florence',
    'Tracy',
    'Edna',
    'Tiffany',
    'Carmen',
    'Rosa',
    'Cindy',
    'Grace',
    'Wendy',
    'Victoria',
    'Edith',
    'Kim',
    'Sherry',
    'Sylvia',
    'Josephine',
    'Thelma',
    'Shannon',
    'Sheila',
    'Ethel',
    'Ellen',
    'Elaine',
    'Marjorie',
    'Carrie',
    'Charlotte',
    'Monica',
    'Esther',
    'Pauline',
    'Emma',
    'Juanita',
    'Anita',
    'Rhonda',
    'Hazel',
    'Amber',
    'Eva',
    'Debbie',
    'April',
    'Leslie',
    'Clara',
    'Lucille',
    'Jamie',
    'Joanne',
    'Eleanor',
    'Valerie',
    'Danielle',
    'Megan',
    'Alicia',
    'Suzanne',
    'Michele',
    'Gail',
    'Bertha',
    'Darlene',
    'Veronica',
    'Jill',
    'Erin',
    'Geraldine',
    'Lauren',
    'Cathy',
    'Joann',
    'Lorraine',
    'Lynn',
    'Sally',
    'Regina',
    'Erica',
    'Beatrice',
    'Dolores',
    'Bernice',
    'Audrey',
    'Yvonne',
    'Annette',
    'June',
    'Samantha',
    'Marion',
    'Dana',
    'Stacy',
    'Ana',
    'Renee',
    'Ida',
    'Vivian',
    'Roberta',
    'Holly',
    'Brittany',
    'Melanie',
    'Loretta',
    'Yolanda',
    'Jeanette',
    'Laurie',
    'Katie',
    'Kristen',
    'Vanessa',
    'Alma',
    'Sue',
    'Elsie',
    'Beth',
    'Jeanne',
    'Vicki',
    'Carla',
    'Tara',
    'Rosemary',
    'Eileen',
    'Terri',
    'Gertrude',
    'Lucy',
    'Tonya',
    'Ella',
    'Stacey',
    'Wilma',
    'Gina',
    'Kristin',
    'Jessie',
    'Natalie',
    'Agnes',
    'Vera',
    'Willie',
    'Charlene',
    'Bessie',
    'Delores',
    'Melinda',
    'Pearl',
    'Arlene',
    'Maureen',
    'Colleen',
    'Allison',
    'Tamara',
    'Joy',
    'Georgia',
    'Constance',
    'Lillie',
    'Claudia',
    'Jackie',
    'Marcia',
    'Tanya',
    'Nellie',
    'Minnie',
    'Marlene',
    'Heidi',
    'Glenda',
    'Lydia',
    'Viola',
    'Courtney',
    'Marian',
    'Stella',
    'Caroline',
    'Dora',
    'Jo',
    'Vickie',
    'Mattie',
    'Terry',
    'Maxine',
    'Irma',
    'Mabel',
    'Marsha',
    'Myrtle',
    'Lena',
    'Christy',
    'Deanna',
    'Patsy',
    'Hilda',
    'Gwendolyn',
    'Jennie',
    'Nora',
    'Margie',
    'Nina',
    'Cassandra',
    'Leah',
    'Penny',
    'Kay',
    'Priscilla',
    'Naomi',
    'Carole',
    'Brandy',
    'Olga',
    'Billie',
    'Dianne',
    'Tracey',
    'Leona',
    'Jenny',
    'Felicia',
    'Sonia',
    'Miriam',
    'Velma',
    'Becky',
    'Bobbie',
    'Violet',
    'Kristina',
    'Toni',
    'Misty',
    'Mae',
    'Shelly',
    'Daisy',
    'Ramona',
    'Sherri',
    'Erika',
    'Katrina',
    'Claire'
];


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:max-file-line-count */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Miller',
    'Davis',
    'Garcia',
    'Rodriguez',
    'Wilson',
    'Martinez',
    'Anderson',
    'Taylor',
    'Thomas',
    'Hernandez',
    'Moore',
    'Martin',
    'Jackson',
    'Thompson',
    'White',
    'Lopez',
    'Lee',
    'Gonzalez',
    'Harris',
    'Clark',
    'Lewis',
    'Robinson',
    'Walker',
    'Perez',
    'Hall',
    'Young',
    'Allen',
    'Sanchez',
    'Wright',
    'King',
    'Scott',
    'Green',
    'Baker',
    'Adams',
    'Nelson',
    'Hill',
    'Ramirez',
    'Campbell',
    'Mitchell',
    'Roberts',
    'Carter',
    'Phillips',
    'Evans',
    'Turner',
    'Torres',
    'Parker',
    'Collins',
    'Edwards',
    'Stewart',
    'Flores',
    'Morris',
    'Nguyen',
    'Murphy',
    'Rivera',
    'Cook',
    'Rogers',
    'Morgan',
    'Peterson',
    'Cooper',
    'Reed',
    'Bailey',
    'Bell',
    'Gomez',
    'Kelly',
    'Howard',
    'Ward',
    'Cox',
    'Diaz',
    'Richardson',
    'Wood',
    'Watson',
    'Brooks',
    'Bennett',
    'Gray',
    'James',
    'Reyes',
    'Cruz',
    'Hughes',
    'Price',
    'Myers',
    'Long',
    'Foster',
    'Sanders',
    'Ross',
    'Morales',
    'Powell',
    'Sullivan',
    'Russell',
    'Ortiz',
    'Jenkins',
    'Gutierrez',
    'Perry',
    'Butler',
    'Barnes',
    'Fisher',
    'Henderson',
    'Coleman',
    'Simmons',
    'Patterson',
    'Jordan',
    'Reynolds',
    'Hamilton',
    'Graham',
    'Kim',
    'Gonzales',
    'Alexander',
    'Ramos',
    'Wallace',
    'Griffin',
    'West',
    'Cole',
    'Hayes',
    'Chavez',
    'Gibson',
    'Bryant',
    'Ellis',
    'Stevens',
    'Murray',
    'Ford',
    'Marshall',
    'Owens',
    'Mcdonald',
    'Harrison',
    'Ruiz',
    'Kennedy',
    'Wells',
    'Alvarez',
    'Woods',
    'Mendoza',
    'Castillo',
    'Olson',
    'Webb',
    'Washington',
    'Tucker',
    'Freeman',
    'Burns',
    'Henry',
    'Vasquez',
    'Snyder',
    'Simpson',
    'Crawford',
    'Jimenez',
    'Porter',
    'Mason',
    'Shaw',
    'Gordon',
    'Wagner',
    'Hunter',
    'Romero',
    'Hicks',
    'Dixon',
    'Hunt',
    'Palmer',
    'Robertson',
    'Black',
    'Holmes',
    'Stone',
    'Meyer',
    'Boyd',
    'Mills',
    'Warren',
    'Fox',
    'Rose',
    'Rice',
    'Moreno',
    'Schmidt',
    'Patel',
    'Ferguson',
    'Nichols',
    'Herrera',
    'Medina',
    'Ryan',
    'Fernandez',
    'Weaver',
    'Daniels',
    'Stephens',
    'Gardner',
    'Payne',
    'Kelley',
    'Dunn',
    'Pierce',
    'Arnold',
    'Tran',
    'Spencer',
    'Peters',
    'Hawkins',
    'Grant',
    'Hansen',
    'Castro',
    'Hoffman',
    'Hart',
    'Elliott',
    'Cunningham',
    'Knight',
    'Bradley',
    'Carroll',
    'Hudson',
    'Duncan',
    'Armstrong',
    'Berry',
    'Andrews',
    'Johnston',
    'Ray',
    'Lane',
    'Riley',
    'Carpenter',
    'Perkins',
    'Aguilar',
    'Silva',
    'Richards',
    'Willis',
    'Matthews',
    'Chapman',
    'Lawrence',
    'Garza',
    'Vargas',
    'Watkins',
    'Wheeler',
    'Larson',
    'Carlson',
    'Harper',
    'George',
    'Greene',
    'Burke',
    'Guzman',
    'Morrison',
    'Munoz',
    'Jacobs',
    'Obrien',
    'Lawson',
    'Franklin',
    'Lynch',
    'Bishop',
    'Carr',
    'Salazar',
    'Austin',
    'Mendez',
    'Gilbert',
    'Jensen',
    'Williamson',
    'Montgomery',
    'Harvey',
    'Oliver',
    'Howell',
    'Dean',
    'Hanson',
    'Weber',
    'Garrett',
    'Sims',
    'Burton',
    'Fuller',
    'Soto',
    'Mccoy',
    'Welch',
    'Chen',
    'Schultz',
    'Walters',
    'Reid',
    'Fields',
    'Walsh',
    'Little',
    'Fowler',
    'Bowman',
    'Davidson',
    'May',
    'Day',
    'Schneider',
    'Newman',
    'Brewer',
    'Lucas',
    'Holland',
    'Wong',
    'Banks',
    'Santos',
    'Curtis',
    'Pearson',
    'Delgado',
    'Valdez',
    'Pena',
    'Rios',
    'Douglas',
    'Sandoval',
    'Barrett',
    'Hopkins',
    'Keller',
    'Guerrero',
    'Stanley',
    'Bates',
    'Alvarado',
    'Beck',
    'Ortega',
    'Wade',
    'Estrada',
    'Contreras',
    'Barnett'
];


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loremIpsum = [
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'sed',
    'do',
    'eiusmod',
    'tempor',
    'incididunt',
    'ut',
    'labore',
    'et',
    'dolore',
    'magna',
    'aliqua',
    'enim',
    'ad',
    'minim',
    'veniam',
    'quis',
    'nostrud',
    'exercitation',
    'ullamco',
    'laboris',
    'nisi',
    'aliquip',
    'ex',
    'ea',
    'commodo',
    'consequat',
    'duis',
    'aute',
    'irure',
    'in',
    'reprehenderit',
    'voluptate',
    'velit',
    'esse',
    'cillum',
    'eu',
    'fugiat',
    'nulla',
    'pariatur',
    'excepteur',
    'sint',
    'occaecat',
    'cupidatat',
    'non',
    'proident',
    'sunt',
    'culpa',
    'qui',
    'officia',
    'deserunt',
    'mollit',
    'anim',
    'id',
    'est',
    'laborum'
];


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:max-file-line-count */
Object.defineProperty(exports, "__esModule", { value: true });
exports.maleFirstNames = [
    'James',
    'John',
    'Robert',
    'Michael',
    'William',
    'David',
    'Richard',
    'Charles',
    'Joseph',
    'Thomas',
    'Christopher',
    'Daniel',
    'Paul',
    'Mark',
    'Donald',
    'George',
    'Kenneth',
    'Steven',
    'Edward',
    'Brian',
    'Ronald',
    'Anthony',
    'Kevin',
    'Jason',
    'Matthew',
    'Gary',
    'Timothy',
    'Jose',
    'Larry',
    'Jeffrey',
    'Frank',
    'Scott',
    'Eric',
    'Stephen',
    'Andrew',
    'Raymond',
    'Gregory',
    'Joshua',
    'Jerry',
    'Dennis',
    'Walter',
    'Patrick',
    'Peter',
    'Harold',
    'Douglas',
    'Henry',
    'Carl',
    'Arthur',
    'Ryan',
    'Roger',
    'Joe',
    'Juan',
    'Jack',
    'Albert',
    'Jonathan',
    'Justin',
    'Terry',
    'Gerald',
    'Keith',
    'Samuel',
    'Willie',
    'Ralph',
    'Lawrence',
    'Nicholas',
    'Roy',
    'Benjamin',
    'Bruce',
    'Brandon',
    'Adam',
    'Harry',
    'Fred',
    'Wayne',
    'Billy',
    'Steve',
    'Louis',
    'Jeremy',
    'Aaron',
    'Randy',
    'Howard',
    'Eugene',
    'Carlos',
    'Russell',
    'Bobby',
    'Victor',
    'Martin',
    'Ernest',
    'Phillip',
    'Todd',
    'Jesse',
    'Craig',
    'Alan',
    'Shawn',
    'Clarence',
    'Sean',
    'Philip',
    'Chris',
    'Johnny',
    'Earl',
    'Jimmy',
    'Antonio',
    'Danny',
    'Bryan',
    'Tony',
    'Luis',
    'Mike',
    'Stanley',
    'Leonard',
    'Nathan',
    'Dale',
    'Manuel',
    'Rodney',
    'Curtis',
    'Norman',
    'Allen',
    'Marvin',
    'Vincent',
    'Glenn',
    'Jeffery',
    'Travis',
    'Jeff',
    'Chad',
    'Jacob',
    'Lee',
    'Melvin',
    'Alfred',
    'Kyle',
    'Francis',
    'Bradley',
    'Jesus',
    'Herbert',
    'Frederick',
    'Ray',
    'Joel',
    'Edwin',
    'Don',
    'Eddie',
    'Ricky',
    'Troy',
    'Randall',
    'Barry',
    'Alexander',
    'Bernard',
    'Mario',
    'Leroy',
    'Francisco',
    'Marcus',
    'Micheal',
    'Theodore',
    'Clifford',
    'Miguel',
    'Oscar',
    'Jay',
    'Jim',
    'Tom',
    'Calvin',
    'Alex',
    'Jon',
    'Ronnie',
    'Bill',
    'Lloyd',
    'Tommy',
    'Leon',
    'Derek',
    'Warren',
    'Darrell',
    'Jerome',
    'Floyd',
    'Leo',
    'Alvin',
    'Tim',
    'Wesley',
    'Gordon',
    'Dean',
    'Greg',
    'Jorge',
    'Dustin',
    'Pedro',
    'Derrick',
    'Dan',
    'Lewis',
    'Zachary',
    'Corey',
    'Herman',
    'Maurice',
    'Vernon',
    'Roberto',
    'Clyde',
    'Glen',
    'Hector',
    'Shane',
    'Ricardo',
    'Sam',
    'Rick',
    'Lester',
    'Brent',
    'Ramon',
    'Charlie',
    'Tyler',
    'Gilbert',
    'Gene',
    'Marc',
    'Reginald',
    'Ruben',
    'Brett',
    'Angel',
    'Nathaniel',
    'Rafael',
    'Leslie',
    'Edgar',
    'Milton',
    'Raul',
    'Ben',
    'Chester',
    'Cecil',
    'Duane',
    'Franklin',
    'Andre',
    'Elmer',
    'Brad',
    'Gabriel',
    'Ron',
    'Mitchell',
    'Roland',
    'Arnold',
    'Harvey',
    'Jared',
    'Adrian',
    'Karl',
    'Cory',
    'Claude',
    'Erik',
    'Darryl',
    'Jamie',
    'Neil',
    'Jessie',
    'Christian',
    'Javier',
    'Fernando',
    'Clinton',
    'Ted',
    'Mathew',
    'Tyrone',
    'Darren',
    'Lonnie',
    'Lance',
    'Cody',
    'Julio',
    'Kelly',
    'Kurt',
    'Allan',
    'Nelson',
    'Guy',
    'Clayton',
    'Hugh',
    'Max',
    'Dwayne',
    'Dwight',
    'Armando',
    'Felix',
    'Jimmie',
    'Everett',
    'Jordan',
    'Ian',
    'Wallace',
    'Ken',
    'Bob',
    'Jaime',
    'Casey',
    'Alfredo',
    'Alberto',
    'Dave',
    'Ivan',
    'Johnnie',
    'Sidney',
    'Byron',
    'Julian',
    'Isaac',
    'Morris',
    'Clifton',
    'Willard',
    'Daryl',
    'Ross',
    'Virgil',
    'Andy',
    'Marshall',
    'Salvador',
    'Perry',
    'Kirk',
    'Sergio',
    'Marion',
    'Tracy',
    'Seth',
    'Kent',
    'Terrance',
    'Rene',
    'Eduardo',
    'Terrence',
    'Enrique',
    'Freddie',
    'Wade'
];


/***/ })
/******/ ]);
//# sourceMappingURL=rangen.bundle.js.map