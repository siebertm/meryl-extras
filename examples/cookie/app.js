var meryl = require('meryl'),
  merylex = require('./../../index');

var cookie = merylex('cookie');

meryl
  .p("*", cookie())
  .h('GET /', function () {
  
    this.responseCookies.foo = 'bar';
    
    // look for cookies
    console.dir(this.requestCookies);
    
    this.send();
  });

require('http').createServer(meryl.cgi()).listen(3000);
console.log('serving http://localhost:3000');
