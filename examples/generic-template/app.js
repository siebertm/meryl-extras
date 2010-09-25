var meryl = require('meryl'),
  merylex = require('./../../index');
  
var gtemplate = merylex('generictemplate');

// Use generic template with all default options
// It uses John Ressig's micro template library by default.
meryl.x('render', gtemplate()); 

meryl.h('GET /', function() {
  this.render('home', {people: ['bob', 'alice', 'jane', 'meryl']});
});

require('http').createServer(meryl.cgi()).listen(3000);
console.log('serving http://localhost:3000');
