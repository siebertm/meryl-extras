/*!
 * Meryl
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

/*
 * Modules dependencies
 */
var fs = require('fs'),
    paperboy = require('node-paperboy');

/*
 * Creates a plugin callback which processes
 * static file requests nia node-paperboy library
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */
module.exports = function (opts) {
  var opts = opts || {};
  var root = opts.root || 'public';
  return function (chain) {
    var self = this;
    paperboy
      .deliver(root, self.request, self.response)
      .addHeader('Expires', 300)
      .error(function(statCode, msg) {
        chain();
      })
      .otherwise(function(err) {
        chain();
      });
  };
}
