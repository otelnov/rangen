const rg = rangen;

rg.image({
  rpp: 10,
  image_size: 600,
  page: rg.num(1, 200)
}).then((res) => {
  imgSrc('image', res.photos[rg.num(0, 9)].image_url);
});

imgSrc('thumb1', rg.thumb({ width: rg.num(100, 300), height: rg.num(100, 300), bgColor: 'lightgreen' }));
imgSrc('thumb2', rg.thumb({ width: rg.num(100, 300), height: rg.num(100, 300), bgColor: 'lightblue', text: 'hello' }));
imgSrc('thumb3', rg.thumb({ width: rg.num(100, 300), height: rg.num(100, 300), bgColor: 'lightpink' }));
rg.thumb({ svg: true, selector: '.thumb4', width: rg.num(100, 300), height: rg.num(100, 300), bgColor: '#fffebe', textColor: '#2e2e2e' });
rg.thumb({ svg: true, selector: '.thumb5', width: rg.num(100, 300), height: rg.num(100, 300), bgColor: '#c4c0ff', textColor: '#fff' });

const user = rg.user()[0];
appendData('id', rg.id());
appendData('username', `${user.name.title} ${user.name.first} ${user.name.last}`);
appendData('phone', user.phone);
appendData('email', user.email);
imgSrc('avatar', rg.avatar({ size: 10 }));

appendData('lorem1', rg.lorem({ sentences: 3, words: 10 }).join(' '));
appendData('lorem2', rg.lorem(20).join(' '));
appendData('lorem3', rg.lorem({ sentences: 6, words: 8 }).join(' '));
appendData('lorem4', rg.lorem({ sentences: 3, words: 15 }).join(' '));

function appendData(name, data) {
  document.getElementsByClassName(name)[0].innerHTML = data;
}

function imgSrc(name, src) {
  document.getElementsByClassName(name)[0].src = src;
}
