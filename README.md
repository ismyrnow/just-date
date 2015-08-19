[![Build Status](https://travis-ci.org/ismyrnow/local-date.svg)](https://travis-ci.org/ismyrnow/local-date)

# LocalDate

Helper for dealing with JS dates independent of time or timezone.

## Why?

Dealing with dates in JavaScript is hard. If you're talking about a timestamp, a point in time, then the representation may differ depending on your timezone. However, if all you care about is the calendar date, you could end up outputting a different date than you expect if you don't parse and serialize dates carefully.

This library helps with a few conventions:

- Serialize and transmit dates as strings in `YYYY-MM-DD` format (no time or timezone is implied).
- When deserializing to a Date object, parse these dates as midnight, local time.
- Default output format without time (`M/D/YYYY`).

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
