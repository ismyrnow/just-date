// Global & AMD version of index.js
// See https://github.com/umdjs/umd/blob/master/amdWeb.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['b'], factory);
  } else {
    // Browser globals
    root.JustDate = factory(root.b);
  }
}(this, function (b) {

  // BEGIN index.js
  'use strict';

  // YYYY-MM-DD
  var ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

  function JustDate(value) {
    if (!value) {
      this.date = null;
    }
    else if (value instanceof Date) {
      this.date = new Date(value.getFullYear(), value.getMonth(), value.getDate());
    }
    else if (typeof value === 'string' && ISO_DATE.test(value)) {
      this.date = new Date(value + ' 00:00:00');
    }
    else {
      throw new Error('Invalid date supplied. Please specify a date object or an ISO date string (YYYY-MM-DD).');
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
  // END index.js

  return JustDate;

}));
