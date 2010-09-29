var meryl = require('meryl'),
  merylex = require('./../../index');

var paperboy = merylex('paperboy');

meryl.p('GET *', paperboy());

meryl.h('GET /', function () {
  this.status = 301;
  this.headers['Location'] = '/index.html';
  this.send();
});

require('http').createServer(meryl.cgi()).listen(3000);
console.log('serving http://localhost:3000');
