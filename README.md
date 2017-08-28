# rangen

[![npm version](https://badge.fury.io/js/rangen.svg)](http://badge.fury.io/js/rangen)
[![Build Status](https://travis-ci.org/otelnov/rangen.svg?branch=master)](https://travis-ci.org/otelnov/rangen)
[![codecov](https://codecov.io/gh/otelnov/rangen/branch/development/graph/badge.svg)](https://codecov.io/gh/otelnov/rangen)
[![Dependency Status](https://david-dm.org/otelnov/rangen.svg)](https://david-dm.org/otelnov/rangen)

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/guide/styleguide)

RanGen is a library for generating different types of data.

## Features

* [Generate random id](https://github.com/otelnov/rangen#id-params-object--number-)
* [Generate random integer](https://github.com/otelnov/rangen#num-min-number-max-number-)
* [Generate random float](https://github.com/otelnov/rangen#float-min-number-max-number-fixed-number-str-boolean-)
* [Generate random boolean](https://github.com/otelnov/rangen#bool-trueprobability-number-)
* [Get random array element](https://github.com/otelnov/rangen#random-array-any-)
* [Generate random user](https://github.com/otelnov/rangen#user-params-userparams-)
* [Get images from 500px](https://github.com/otelnov/rangen#image-params-imageparams-promise)
* [Generate lorem ipsum](https://github.com/otelnov/rangen#lorem-params-loremparams--number-)
* [Create custom thumbnails](https://github.com/otelnov/rangen#thumb-params-thumbparams-)
* [Generate github-like avatar](https://github.com/otelnov/rangen#avatar-params-avatarparams-)

## Demo

[http://otelnov.github.io/rangen/](http://otelnov.github.io/rangen/)

## Installing

Using npm:
```
$ npm install rangen
```

## Usage
Node.js
```javascript
const rg = require('rangen');
rg.id(); // RhyDMHO
```
Browser:
```html
<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset="UTF-8">
    <title>rangen</title>
    <script src="build/rangen.bundle.js"></script>
  </head>
  <body>
    <script>
      alert(rangen.id());
    </script>
  </body>
</html>

```
Typescript
```javascript
import { id } from 'rangen';

id(); // RhyDMHO
```
## Methods






### id( params?: Object | number )
Generate random string, using one of the character set listed below or providing your own with `str` key.

Character sets:

1. **num** - '0123456789'
2. **alpha** - 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
3. **sym** - '_-~!@#$%^&*()|}{?></'
4. **alphanum** - 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
6. **all** - 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-~!@#$%^&*()|}{?></'

```javascript
import { id } from 'rangen';

const newId = id(); // W6hOC2N
const password = id({length: 12, charSet: 'all'}); // f5HK7-s$Q2$#
const _id = id(9); // df9HN5rf3
```

| params  | default value |
| :------: | :--------------: |
| _length_ (optional)  | 7 |
| _charSet_ (optional) | 'alphanum' |
| _str_ (optional)  | |







### num( min?: number, max?: number )
Generate random number in specific range.
```javascript
import { num } from 'rangen';

const newNum = num(); // 864
```

| param  | default value |
| :------: | :--------------: |
| _min_ (optional) | 0 |
| _max_ (optional) | 9999 |




### float( min?: number, max?: number, fixed?: number, str?: boolean )
Generate random floating-point number in specific range.
```javascript
import { float } from 'rangen';

float(); // 0.9529138279087489

float(
  4, // from
  5, // to
  3, // round to a set number of decimal places,
  true // return string (if you want to keep 00 e.g.)
);
// '4.830'
```

| param  | default value |
| :------: | :--------------: |
| _min_ (optional) | 0 |
| _max_ (optional) | 1 |
| _fixed_ (optional) |  |
| _str_ (optional) | false |





### bool( trueProbability?: number )
Return random boolean value ( true / false ).
```javascript
import { bool } from 'rangen';

const boolean = bool(); //true

```

trueProbability is an optional param if you want to control probability of returned value.

bool(0) will never return true

bool(100) will always return true

bool(30) will return true in about 30% of cases...




### random( array: any[] )
Get random array element.
```javascript
import { random } from 'rangen';

const randomFruit = random(['banana', 'apple', 'orange']); // apple
```






### user( params?: UserParams )
Generate random user data
```javascript
import { user } from 'rangen';

const testUser = user();
```

The following parameters can be passed:

```javascript
UserParams {
  count?: number; // default 1
  gender?: 'male' | 'female' | 'any'; // default any
  minAge?: number; // default 18
  maxAge?: number; // default 55
}
```

Results:
```javascript
[
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "Jerome",
      "last": "Guzman"
    },
    "email": "jerome.guzman@example.com",
    "age": 52,
    "dob": "1965-03-06T22:00:00.000Z",
    "registered": "2017-04-27T10:34:22.885Z",
    "phone": "801-345-7850",
    "id": "IXvQ2rg"
  }
]

```







### image( params?: ImageParams ):Promise
Generate set of photos provided by https://500px.com.

Please check [500px terms](https://500px.com/terms) before using.

```javascript
import { image } from 'rangen';

image();
```


You can pass native 500px parameters. Check [500px API](https://github.com/500px/api-documentation/blob/master/endpoints/photo/GET_photos.md) for more details.

```javascript
image({
  image_size: 600, // Image size. Default - 2
  rpp: 2, // Number of images. Default - 20
  feature: 'highest_rated', // Photo stream to be retrieved. Default - 'popular'
  only: 'Animals' // Name of the category to return photos from
  // ...
}).then();
```

Results:

```javascript
[{
  "id": 105106007,
  "user_id": 1913159,
  "name": "Fight between rainbows",
  "description": null,
  "camera": "Canon EOS 7D",
  "lens": "EF400mm f/2.8L IS USM",
  "focal_length": "400",
  "iso": "200",
  "shutter_speed": "1/3200",
  "aperture": "2.8",
  "times_viewed": 29268,
  "rating": 75,
  "status": 1,
  "created_at": "2015-04-15T10:48:37-04:00",
  "category": 11,
  "location": null,
  "latitude": null,
  "longitude": null,
  "taken_at": "2013-05-26T15:16:02-04:00",
  "hi_res_uploaded": 0,
  "for_sale": false,
  "width": 4308,
  "height": 2872,
  "votes_count": 2311,
  "favorites_count": 1480,
  "comments_count": 190,
  "nsfw": false,
  "sales_count": 0,
  "for_sale_date": null,
  "highest_rating": 99.9,
  "highest_rating_date": "2015-04-16T08:44:17-04:00",
  "license_type": 0,
  "converted": 27,
  "collections_count": 0,
  "crop_version": 6,
  "privacy": false,
  "image_url": "https://drscdn.500px.org/photo/105106007/w%3D600_h%3D600/ef557d0965a18ce8a04d612ed7c884bc?v=6",
  "images": [{
    "size": 600,
    "url": "https://drscdn.500px.org/photo/105106007/w%3D600_h%3D600/ef557d0965a18ce8a04d612ed7c884bc?v=6",
    "https_url": "https://drscdn.500px.org/photo/105106007/w%3D600_h%3D600/ef557d0965a18ce8a04d612ed7c884bc?v=6",
    "format": "jpeg"
  }],
  "url": "/photo/105106007/fight-between-rainbows-by-marco-redaelli",
  "positive_votes_count": 2311,
  "converted_bits": 27,
  "image_format": "jpeg",
  "user": {
    "id": 1913159,
    "username": "MarcoRedaelli",
    "firstname": "Marco",
    "lastname": "Redaelli",
    "city": "Busnago",
    "country": "Italy",
    "usertype": 0,
    "fullname": "Marco Redaelli",
    "userpic_url": "https://pacdn.500px.org/1913159/e190e848e7e54255510dc1fd1518bc935328c7b1/1.jpg?5",
    "userpic_https_url": "https://pacdn.500px.org/1913159/e190e848e7e54255510dc1fd1518bc935328c7b1/1.jpg?5",
    "cover_url": "https://pacdn.500px.org/1913159/e190e848e7e54255510dc1fd1518bc935328c7b1/cover_2048.jpg?12",
    "upgrade_status": 0,
    "store_on": true,
    "affection": 233267
  }
}, ...]
```





### lorem( params?: LoremParams | number )
Generate lorem ipsum text.
Takes words number or obj as params.

```javascript
import { lorem } from 'rangen';

lorem(5); // Ut incididunt elit eu ad.
lorem({sentences: 2, words: 4}); // ['Consectetur id do nulla.', 'Consectetur dolor id consectetur.']
lorem({sentences: 3, words: 6}).join(' '); // Ad commodo excepteur sed cillum in. Voluptate sed exercitation cupidatat est ex. Consequat eiusmod voluptate excepteur sunt elit.
```
| param  | default value |
| :------: | :--------------: |
| _words_ (optional) | 10 |
| _sentences_ (optional) | 1 |





### thumb( params?: ThumbParams )
Create thumbnails with specific size, color and text.
```javascript
import { thumb } from 'rangen';

// by default will return base64 hash generated with canvas.
thumb();

// set svg: true and selector: 'your-css-selector' // to generate svg
thumb({
  svg: true,
  selector: '#thumbnail',
  width: 300,
  bgColor: 'red',
  text: 'rangen',
  textColor: '#fff'
});


```
![](https://telnov.com/files/rangen/default.png)
![](https://telnov.com/files/rangen/red.png)
![](https://telnov.com/files/rangen/logo.png)

| param  | default value |
| :------: | :--------------: |
| _width_ (optional) | 100  |
| _height_ (optional) | 100 |
| _bgColor_ (optional) | #eee |
| _textColor_ (optional) | #555 |
| _borderColor_ (optional) | #555 |
| _text_ (optional) | {width}x{height} |
| _fontSize_ (optional) | depends on block size |
| _svg_ (optional) | false |
| _selector_ (optional) |  |




### avatar( params?: AvatarParams )
Generate github-like avatars.

```javascript
import { avatar } from 'rangen';

avatar();
avatar({ size: 5, colors: ['yellow', 'blue'] });
```

![](https://telnov.com/files/rangen/ava1.png)
![](https://telnov.com/files/rangen/ava2.png)

| param  | description | default value |
| :------: | :-------: | :--------------: |
| _width_ (optional) | | 300  |
| _height_ (optional) | | 300 |
| _size_ (optional) | matrix size | 3 |
| _colors_ (optional) | | ['#0A7B83', '#2AA876', '#FFD265', '#F19C65', '#CE4D45'] |




## Todo:

* Update lorem() to generate natural text using sentiment analysis
* Update avatar() with real faces
* Add more fields to user data, like location
* Generate random color
* Poker cards
* Random time / date (for now you can use several of random nums)



## Contributing

Contributions are very much welcome.
