var meryl = require('meryl'),
  merylex = require('./../../index');

var generictemplate = merylex('generictemplate');

require('http').createServer(
  meryl
	// Use generic template with all default options
  // It uses John Ressig's micro template library by default.
  .x('render', generictemplate())
  .h('GET /', function() {
      this.render('home', {people: ['bob', 'alice', 'jane', 'meryl']});
    }
  )
  .cgi()
).listen(3000);
console.log('serving http://localhost:3000');