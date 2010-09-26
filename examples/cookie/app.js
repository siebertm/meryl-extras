var meryl = require('meryl'),
  merylex = require('./../../index');

var cookieResolver = merylex('cookieResolver');
var cookieRecorder = merylex('cookieRecorder');

meryl
  .x('cook', cookieRecorder())
  .p("*", cookieResolver())
  .h('GET /', function () {
    // look for cookies
    console.dir(this.cookies);
    
    // send a cookie
    this.cook('name', 'kadir');
    
    this.send();
  });

require('http').createServer(meryl.cgi()).listen(3000);
console.log('serving http://localhost:3000');
