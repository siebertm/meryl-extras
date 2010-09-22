var meryl = require('meryl'),
  merylex = require('./../../index');

var staticfile = merylex('staticfile');

meryl.p('GET /static/<filepath>', staticfile());

meryl.h('GET /', function () {
  this.status = 301;
  this.headers['Location'] = '/static/index.html';
  this.send();
});

require('http').createServer(meryl.cgi()).listen(3000);
console.log('serving http://localhost:3000');
