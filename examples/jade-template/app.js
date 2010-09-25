var meryl = require('meryl'),
  merylex = require('./../../index'),
  jade = require('jade');

var generictemplate = merylex('generictemplate');

require('http').createServer(
  meryl
  .x('render',
    generictemplate({
      templateExt: 'jade',
      renderFunc: function (src, data) { return jade.render(src, {locals: data}); }
    }
  ))
  .h('GET /', function() {
      this.render('home', {people: ['bob', 'alice', 'jane', 'meryl']});
    }
  )
  .cgi()
).listen(3000);
console.log('serving http://localhost:3000');