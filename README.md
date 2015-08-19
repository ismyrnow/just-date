[![Build Status](https://travis-ci.org/ismyrnow/local-date.svg)](https://travis-ci.org/ismyrnow/local-date)

# LocalDate

Helper for dealing with JS dates independent of time or timezone.

## Why?

Dealing with dates in JavaScript is hard. JavaScript Date objects are represented as a point in time, with a time and timezone. However, a date that started as midnight on a Monday (UTC) may be rendered as 7 or 8pm on Sunday (EST). This becomes problematic when you don't even care about the time, but only ever show/manipulate the date.

This library helps with a few conventions:

- Serialize and transmit dates as strings in `YYYY-MM-DD` format (no time or timezone is implied).
- When deserializing to a Date object, parse these dates as midnight, local time.
- Default formatted output without time (`M/D/YYYY`).

## Install

```
npm install local-date
```

## Usage

```javascript
var LocalDate = require('local-date');

var localDate = new LocalDate('2015-01-01');

localDate.toString(); // => '2015-01-01'
localDate.toFormattedString(); // => '1/1/2015'
localDate.date // (instanceof Date) => 'Thu Jan 01 2015 00:00:00 GMT-0500...'
```

## Testing

```
npm test
```
