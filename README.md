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

License
-------

The MIT License
