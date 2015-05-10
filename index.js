var rg = require('./rangen');

rg.image({
	rpp: 10,
	image_size: 600,
	page: rg.num(1, 200)
}, function (err, image) {
	imgSrc('image', image[rg.num(0, 9)].image_url);
});

rg.user({count: 1}, function (err, res) {
	var user = res[0].user;
	imgSrc('avatar', user.picture.medium);
	appendData('username', user.name.title + ' ' + user.name.first + ' ' + user.name.last);
	appendData('phone', user.phone);
	appendData('email', user.email);
});

rg.lorem(3, function (err, text) {
	appendData('lorem1', text[0]);
	appendData('lorem2', text[1]);
	appendData('lorem3', text[2]);
});

appendData('id', rg.id());

function appendData(name, data) {
	document.getElementsByClassName(name)[0].innerHTML = data;
}

function imgSrc(name, src) {
	document.getElementsByClassName(name)[0].src = src;
}