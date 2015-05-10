# RanGen - module to generate different type of data.

## demo

[http://otelnov.github.io/rangen/](http://otelnov.github.io/rangen/)

## install
```
$ npm install --save rangen
```

## usage
```javascript
var rg = require('rangen');
rg.id(); // RhyDMHO
```

## methods






### id
Generate random string, using one of the character set listed below. Own set can be also provided as third parameter. 

```javascript
var id = rg.id(length, charset, string); //W6hOC2N
```

Character sets:

1. **n** - '0123456789'
2. **a** - 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
3. **c** - '_-~!@#$%^&*()|}{?></'
4. **an** - 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
5. **id** - 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-'
6. **m** - 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-~!@#$%^&*()|}{?></'
7. **o** - pass your own string as third parameter

| param  | default value |
| :------: | :--------------: |
| _length_ (optional)  | 7 |
| _charset_ (optional) | 'id' |
| _string_ (optional)  | |







### number
Generate random number in specific range. 
```javascript
var num = rg.num(min, max); //864
```

| param  | default value |
| :------: | :--------------: |
| _min_ (optional) | 0 |
| _max_ (optional) | 9999 |







### user
Generate random user data using https://randomuser.me
```javascript
rg.user(params, cb);
```

Can take a callback:
```javascript
rg.user(function(err, user){
  if(!err){
    console.log(user);
  }
});
```

Or return promise:
```javascript
rg.user()
  .then(function (response) {
    console.log(response)
  })
  .catch(function (response) {
    console.log(response)
  });
```

The following parameters can be passed:

```javascript
var params = {
  count: 5, // number of users that should be generated (1 - 100). Default - 1
  gender: 'male' // gender of users ('male', 'female'). Random by default. 
}
```

First argument can be an integer, if you need to pass count only
```javascript
rg.user(5, cb);
```

Results:
```javascript
[{
  "user": {
    "gender": "male",
    "name": {"title": "mr", "first": "joaquin", "last": "benitez"},
    "location": {"street": "3725 calle de Ángel garcía", "city": "sevilla", "state": "país vasco", "zip": "70927"},
    "email": "joaquin.benitez47@example.com",
    "username": "brownrabbit250",
    "password": "robert",
    "salt": "8Bos5xJa",
    "md5": "dd502a8586540bfa95c1fa08a04270ca",
    "sha1": "a0f29e6c75cc27ea6afe54bcf1b003679bb33e5c",
    "sha256": "e0f7cc8b4ca165cb15e1d71c92c8f96e0d18d1c537d0cf720eb90762a2851b03",
    "registered": "1143822952",
    "dob": "558130886",
    "phone": "956-784-995",
    "cell": "688-607-191",
    "DNI": "02142296-Z",
    "picture": {
      "large": "http://api.randomuser.me/portraits/men/94.jpg",
      "medium": "http://api.randomuser.me/portraits/med/men/94.jpg",
      "thumbnail": "http://api.randomuser.me/portraits/thumb/men/94.jpg"
    },
    "version": "0.6",
    "nationality": "ES"
  }, "seed": "0ef2a0462d7044a301"
}, ...]

```







### image
Generate set of photos provided by https://500px.com.
Photos are copyrighted! For reference only. Check [500px terms](https://500px.com/terms) before using.

```javascript
rg.image(params, cb);
```

Can take a callback:
```javascript
rg.image(function(err, images){
  if(!err){
    console.log(images);
  }
});
```

Or return promise:
```javascript
rg.image()
  .then(function (response) {
    console.log(response)
  })
  .catch(function (response) {
    console.log(response)
  });
```

The following optional parameters can be passed:

```javascript
var params = {
  key: 'your_key', // 500px consumer_key
  image_size: 600, // Image size. Default - 2
  rpp: 2, // Number of images. Default - 20
  feature: 'highest_rated', // Photo stream to be retrieved. Default - 'popular'
  only: 'Animals' // Name of the category to return photos from
  // ... 
}
```

Params can take native 500px parameters. Check [500px API](https://github.com/500px/api-documentation/blob/master/endpoints/photo/GET_photos.md) for more details.

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





### lorem ipsum
Generate lorem ipsum text.
Number of paragraphs can be set as first argument.

```javascript
rg.lorem(count, cb);
```
| param  | default value |
| :------: | :--------------: |
| _count_ (optional) | 1 |
| _cb_ (optional) |  |


Can take a callback:
```javascript
rg.lorem(function(err, text){
  if(!err){
    console.log(text);
  }
});
```

Or return promise:
```javascript
rg.lorem()
  .then(function (response) {
    console.log(response)
  })
  .catch(function (response) {
    console.log(response)
  });
```

Results:
```javascript
["Irure tempor shankle turducken.  Aliqua laboris est, cow in short ribs leberkas pork chop meatloaf deserunt porchetta cupidatat strip steak fatback.  Ribeye prosciutto andouille, pariatur dolore sausage ut doner aliquip nostrud rump occaecat shank.  Ipsum laborum hamburger turducken."]
```

## Todo:

### Random text fragments, sentence, word...

### Random football team, player, national team

### Random youtube video
