[![Build Status](https://travis-ci.org/ismyrnow/just-date.svg)](https://travis-ci.org/ismyrnow/just-date)

# JustDate

Helper for dealing with JS dates independent of time or timezone.

## Why?

Dealing with dates in JavaScript is hard. JavaScript Date objects are represented as a point in time, with a time and timezone. However, a date that started as midnight on a Monday (UTC) may be rendered as 7 or 8pm on Sunday (EST). This becomes problematic when you don't even care about the time, but only ever show/manipulate the date. Thoughtful date parsing and formatting helps, but gets hairy if you're not consistent about how dates are represented.

This library helps with a few conventions:

- Serialize dates (e.g. to transmit over a network) as strings in `YYYY-MM-DD` format (no time or timezone is implied).
- Construct objects using string format (`YYYY-MM-DD`) or date objects (local time is used).
- If you need the Date object, it is provided to you as midnight local time (this avoids timezone shifting when used locally).
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

// Here, JS assumes you mean midnight UTC time. If you are behind UTC/GMT, your date will be shifted.
var dontDoThis = new Date('2015-07-04');
dontDoThis.getDate(); // => 3 (ouch!)

// Here, JS assumes you mean midnight in local time.
// Just don't call `toString()` on this and pass it to another system
var localDate = new Date(2015, 6, 4);

// When passing a Date object in the constructor, local time is assumed while extracting the date.
justDate = new JustDate(localDate);

// Same results as above.
```

## Testing

```
npm test
```
