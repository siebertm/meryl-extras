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

Available Extras
----------------

Plugins:

 * Static file (staticfile)

Extensions:

 * Micro Template (microtemplate)

Wishlist (To do)
------------

Plugins

 * Improved static file plugin
 * Post data decoder (File upload)

Extensions

 * Cookie management
 * Session management
 * Cache management
 * Mustache.js template engine integration (@berkerpeksag)
 * Eco template engine integration
 * Gzip compression

Please don't forget to help this project by contibuting.
Reservations cost no pennies ;)

License
-------

The MIT License
