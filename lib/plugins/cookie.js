/*!
 * Meryl
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

/*
 * Looks for any cookie in http request and
 * attaches them as a cookie object to Meryl context
 * Also adds support for responding cookies.
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */
module.exports = function (opts) {
  return function (chain) {
    var self = this;
    
    self.requestCookies = {};
    var cookieHeader = self.request.headers.cookie;
    if (cookieHeader) {
      var cookieParts = cookieHeader.split(";");
      for (var i in cookieParts) {
        var part = cookieParts[i];
        var key = part.substr(0, part.indexOf("="));
        var value = part.substr(part.indexOf("=") + 1, part.length);
        try {
          self.requestCookies[key] = JSON.parse(value);
        } catch (e) {
          self.requestCookies[key] = value;
        }
      }
    }
    
    self.responseCookies = {};
    var writeHead = self.response.writeHead;
    self.response.writeHead = function (status, headers) {
      var cookieBuffer = '';
      for (var i in self.responseCookies) {
        var cookie = self.responseCookies[i];
        cookieBuffer += i + "=" + JSON.stringify(cookie) + ";"
      }
      if (headers['Set-Cookie']) {
        headers['Set-Cookie'] = headers['Set-Cookie']
          + "\r\nSet-Cookie: " + cookieBuffer;
      } else {
        headers['Set-Cookie'] = cookieBuffer;
      }
      writeHead.call(self.response, status, headers);
    }
    chain();
  };
}
