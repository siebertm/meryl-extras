var meryl = require('meryl'),
  merylex = require('./../../index');
  
var jade = require('jade');

var gtemplate = merylex('generictemplate');

meryl.x('render',
  gtemplate({
    templateExt: 'jade',
    renderFunc: function (src, data) { return jade.render(src, {locals: data}); }
  }
));

meryl.h('GET /', function() {
  this.render('home', {people: ['bob', 'alice', 'jane', 'meryl']});
});

require('http').createServer(meryl.cgi()).listen(3000);
console.log('serving http://localhost:3000');
