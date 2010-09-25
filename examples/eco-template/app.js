var meryl = require('meryl'),
  merylex = require('./../../index'),
  eco = require('eco');

var generictemplate = merylex('generictemplate');

require('http').createServer(
	meryl
  .x('render', generictemplate({templateExt: 'eco', renderFunc: eco.render }))
  .h('GET /', function() {
	    this.render('home', {people: ['bob', 'alice', 'jane', 'meryl']});
	  }
  )
  .cgi()
).listen(3000);
console.log('serving http://localhost:3000');