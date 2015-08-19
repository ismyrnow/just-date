[![Build Status](https://travis-ci.org/ismyrnow/local-date.svg)](https://travis-ci.org/ismyrnow/local-date)

# LocalDate

Helper for dealing with JS dates independent of time or timezone.

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
localDate.date // (instanceof Date) => 'Sun Feb 01 2015 00:00:00...'
```

## Testing

```
npm test
```
