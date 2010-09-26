/*!
 * Meryl
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

// Cookie registiry
var cookies = {};

/*
 * Creates a cookie ready to send to the client
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */
module.exports = function (opts) {
  return function (key, val) {
    cookies[key] = val;
    var cookieBuffer = '';
    for (var i in cookies) {
      var cookie = cookies[i];
      cookieBuffer += i + "=" + JSON.stringify(cookie) + ";"
    }
    this.headers['Set-Cookie'] = cookieBuffer;
  };
}
