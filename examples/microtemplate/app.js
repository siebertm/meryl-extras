var meryl = require('meryl'),
  merylex = require('./../../index');
  
var microtemplate = merylex('microtemplate');

meryl.x('render', microtemplate());

meryl.h('GET /', function() {
  this.render('home', {people: ['bob', 'alice', 'jane', 'meryl']});
});

require('http').createServer(meryl.cgi()).listen(3000);
console.log('serving http://localhost:3000');
