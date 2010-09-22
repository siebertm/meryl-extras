/*!
 * Meryl
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

/*
 * Modules dependencies
 */
var meryl = require('meryl'),
  path = require('path');

/*
 * Generic function tries to find a module
 * with given module name under given directory name
 *
 * @param {String} dir
 * @param {String} name
 * @return {Object}
 * @api private
 */
var probe = function (dir, name) {
  try {
    return require(
      path.join(__dirname, 'lib', dir, name.replace('\.\.', '') + '.js'));
  } catch (e) {
    return null;
  }
};

/*
 * Function to probe any addon for given name
 *
 * @param {String} name
 * @return {Object}
 * @api private
 */
module.exports = function (name) {
  var extra = probe('plugins', name) 
    || probe('extensions', name);
  if (!extra)
    throw 'Could not find add-on';
   return extra;
};

