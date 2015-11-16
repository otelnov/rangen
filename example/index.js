var rg = rangen;

rg.image({
  rpp: 10,
  image_size: 600,
  page: rg.num(1, 200)
}, function (err, image) {
  imgSrc('image', image[rg.num(0, 9)].image_url);
});

imgSrc('thumb1', rg.thumb(rg.num(100, 300), rg.num(100, 300), 'lightgreen'));
imgSrc('thumb2', rg.thumb(rg.num(100, 300), rg.num(100, 300), 'lightblue'));
imgSrc('thumb3', rg.thumb(rg.num(100, 300), rg.num(100, 300), 'lightpink'));

rg.user({count: 1}, function (err, res) {
  var user = res[0].user;
  imgSrc('avatar', user.picture.medium);
  appendData('username', user.name.title + ' ' + user.name.first + ' ' + user.name.last);
  appendData('phone', user.phone);
  appendData('email', user.email);
});

rg.lorem(2, function (err, text) {
  appendData('lorem1', text);
});

rg.lorem(2, function (err, text) {
  appendData('lorem2', text);
});

rg.lorem(10, function (err, text) {
  appendData('lorem3', text);
});

appendData('id', rg.id());

function appendData(name, data) {
  document.getElementsByClassName(name)[0].innerHTML = data;
}

function imgSrc(name, src) {
  document.getElementsByClassName(name)[0].src = src;
}
