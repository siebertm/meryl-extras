Meryl Extras
============

Synopsis
--------

This project provides extra plugins and extensions to the [Meryl](http://coffeemate.github.com/meryl) project.

Install
-------

	> npm install meryl-extras

Usage
-----

This example demonstrates a basic file server based on static file plugin

	// app.js

	var meryl = require('meryl'),
	  merylex = require('meryl-extras');

	var staticfile = merylex('staticfile');

	require('http').createServer(
	  meryl.p('GET /<filepath>', staticfile()).cgi()
	).listen(3000);


This one demonstrates the usage of [eco](http://github.com/sstephenson/eco) template engine 

	// app.js
	
	var meryl = require('meryl'),
	  merylex = require('meryl-extras'),
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
  

Available Extras
----------------

Plugins:

 * Static file (staticfile)

Extensions:

 * Generic template (generictemplate)

Wishlist (To do)
------------

Plugins

 * Improved static file plugin
 * Post data decoder (File upload)

Extensions

 * Cookie management
 * Session management
 * Cache management
 * Gzip compression

Please don't forget to help this project by contibuting.
Reservations cost no pennies ;)

License
-------

The MIT License
