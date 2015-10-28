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
