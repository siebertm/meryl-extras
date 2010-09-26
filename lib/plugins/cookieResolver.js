/*!
 * Meryl
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

var cookies = {};

/*
 * Looks for any cookie in http request and
 * attaches them as a cookie object to Meryl context
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */
module.exports = function (opts) {
  return function (chain) {
    var cookieHeader = this.request.headers.cookie;
    if (cookieHeader) {
      var cookies = {};
      var cookieParts = cookieHeader.split(";");
      for (var i in cookieParts) {
        var part = cookieParts[i];
        var key = part.substr(0, part.indexOf("="));
        var value = part.substr(part.indexOf("=") + 1, part.length);
        try {
          cookies[key] = JSON.parse(value);
        } catch (e) {
          cookies[key] = value;
        }
      }
    }
    this.cookies = cookies || {};
    chain();
  };
}
