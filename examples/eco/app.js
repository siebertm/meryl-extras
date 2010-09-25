var meryl = require('meryl'),
  merylex = require('./../../index');
  
var eco = require('eco');

var gtemplate = merylex('generictemplate');

meryl.x('render', gtemplate({templateExt: 'eco', renderFunc: eco.render }));

meryl.h('GET /', function() {
  this.render('home', {people: ['bob', 'alice', 'jane', 'meryl']});
});

require('http').createServer(meryl.cgi()).listen(3000);
console.log('serving http://localhost:3000');
