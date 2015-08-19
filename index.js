// YYYY-MM-DD
var ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function LocalDate(value) {
  if (!value) {
    this.date = null;
  }
  else if (value instanceof Date) {
    this.date = new Date(dateToLocalISODateString(value) + ' 00:00:00');
  }
  else if (typeof value === 'string' && ISO_DATE.test(value)) {
    this.date = new Date(value + ' 00:00:00');
  }
  else {
    throw new Error('Invalid date supplied. Please specify a date object or an ISO date string (YYYY-MM-DD).');
  }

  return this;
}
 
LocalDate.prototype.toString = function () {
  if (!this.date) {
    return '';
  }

  var date = this.date;

  var dateString = [date.getFullYear(), pad2(date.getMonth() + 1), pad2(date.getDate())].join('-');

  return dateString;
};

LocalDate.prototype.toFormattedString = function () {
  if (!this.date) {
    return '';
  }

  var date = this.date;

  return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
};

/**
 * Convert a date object to an ISO date string without converting the timezone to UTC.
 * @param date {Date}
 * @returns {string} date portion of ISO date string (YYYY-MM-DD)
 */
function dateToLocalISODateString(date) {
  // Why not `date.toISOString()`? We want the date in local time, which should have a time of zero. If
  // We convert to an ISO string, the timezone will convert to UTC, which may shift the date.
  return [date.getFullYear(), pad2(date.getMonth() + 1), pad2(date.getDate())].join('-');
}

function pad2(number) {
  return number < 10 && number >= 0 ? '0' + number : number;
}

module.exports = LocalDate;
