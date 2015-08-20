[![Build Status](https://travis-ci.org/ismyrnow/just-date.svg)](https://travis-ci.org/ismyrnow/just-date)

# JustDate

Helper for dealing with JS dates independent of time or timezone.

## Why?

Dealing with dates in JavaScript is hard. JavaScript Date objects are represented as a point in time, with a time and timezone. However, a date that started as midnight on a Monday (UTC) may be rendered as 7 or 8pm on Sunday (EST). This becomes problematic when you don't even care about the time, but only ever show/manipulate the date. Thoughtful date parsing and formatting helps, but gets hairy if you're not consistent about how dates are represented.

This library helps with a few conventions:

- Serialize dates (e.g. to transmit over a network) as strings in `YYYY-MM-DD` format (no time or timezone is implied).
- When constructed with a Date object, use date at midnight in UTC timezone (common storage format).
- If you need the Date object, it is provided to you as midnight local time (this avoids timezone shifting).
- Formatted string output without time (`M/D/YYYY`).

The key here is helping you to represent your dates without a time or timezone, and having conventions about how to interpret dates in Date objects when you need them.

## Install

```
npm install just-date
# or
bower install just-date
```

## Usage

```javascript
var JustDate = require('local-date');

// String constructor
// ------------------

var justDate = new JustDate('2015-07-04');

justDate.toString(); // => '2015-07-04'
justDate.toFormattedString(); // => '7/4/2015'
justDate.date; // => {Date} 'Sat Jul 04 2015 00:00:00 GMT-0400...'

// Date constructor
// ----------------

var localDate = new Date('2015-07-04'); // => JS assumes you mean midnight UTC.
localDate.getDate(); // => 3 (ouch! notice the shifted date)

var justDate2 = new JustDate(localDate); // When passing a Date in the constructor, UTC timezone is assumed.

justDate2.toString(); // => '2015-07-04'
justDate2.toFormattedString(); // => '7/4/2015'
justDate2.date; // => {Date} 'Sat Jul 04 2015 00:00:00 GMT-0400...'
```

## Testing

```
npm test
```
