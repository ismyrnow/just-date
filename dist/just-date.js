(function(){
var r=function(){var e="function"==typeof require&&require,r=function(i,o,u){o||(o=0);var n=r.resolve(i,o),t=r.m[o][n];if(!t&&e){if(t=e(n))return t}else if(t&&t.c&&(o=t.c,n=t.m,t=r.m[o][t.m],!t))throw new Error('failed to require "'+n+'" from '+o);if(!t)throw new Error('failed to require "'+i+'" from '+u);return t.exports||(t.exports={},t.call(t.exports,t,t.exports,r.relative(n,o))),t.exports};return r.resolve=function(e,n){var i=e,t=e+".js",o=e+"/index.js";return r.m[n][t]&&t?t:r.m[n][o]&&o?o:i},r.relative=function(e,t){return function(n){if("."!=n.charAt(0))return r(n,t,e);var o=e.split("/"),f=n.split("/");o.pop();for(var i=0;i<f.length;i++){var u=f[i];".."==u?o.pop():"."!=u&&o.push(u)}return r(o.join("/"),t,e)}},r}();r.m = [];
r.m[0] = {
"index.js": function(module, exports, require){
'use strict';

// YYYY-MM-DD
var DATE_FORMAT = /^(\d+)-(\d{2})-(\d{2})$/;

function JustDate(value) {
  if (!value) {
    this.date = null;
  }
  else if (value instanceof Date) {
    this.date = new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }
  else if (typeof value === 'string' && DATE_FORMAT.test(value)) {
    var dateParts = value.match(DATE_FORMAT).splice(1);
    this.date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  }
  else {
    throw new Error('Invalid date supplied. Please specify a date object or date string in YYYY-MM-DD format.');
  }

  return this;
}

JustDate.prototype.toString = function () {
  if (!this.date) {
    return '';
  }

  var date = this.date;

  // Why not `date.toISOString()`? We want the date in local time, which should have a time of zero. If
  // We convert to an ISO string, the timezone will convert to UTC, which may shift the date.
  var dateString = [date.getFullYear(), pad2(date.getMonth() + 1), pad2(date.getDate())].join('-');

  return dateString;
};

JustDate.prototype.toFormattedString = function () {
  if (!this.date) {
    return '';
  }

  var date = this.date;

  return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
};

function pad2(number) {
  return number < 10 && number >= 0 ? '0' + number : number;
}

module.exports = JustDate;

}
};
function umd(n,f){"object"==typeof exports&&(module.exports=n),"function"==typeof define&&define.amd&&define(f,function(){return n});var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e[f]=n}umd(r("index.js"), "JustDate");}());
