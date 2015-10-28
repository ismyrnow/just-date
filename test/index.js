var test = require('tape');
var JustDate = require('../index');

test('module exists', function (t) {
  t.equals(typeof JustDate, 'function', 'Module should export a function');
  t.end();
});

test('string constructor', function (t) {
  var d = new JustDate('2015-07-04');

  t.equals(d.toString(), '2015-07-04', 'toString returns original YYYY-MM-DD');
  t.equals(d.toFormattedString(), '7/4/2015', 'toFormattedString returns M/D/YYYY');
  t.equals(d.date.getDate(), 4, 'date number is maintained');

  t.end();
});

test('date constructor', function (t) {
  var localDate = new Date(2015, 6, 4);
  var d = new JustDate(localDate);

  t.equals(d.toString(), '2015-07-04', 'toString returns original YYYY-MM-DD');
  t.equals(d.toFormattedString(), '7/4/2015', 'toFormattedString returns M/D/YYYY');
  t.equals(d.date.getDate(), 4, 'date number is maintained');

  t.end();
});

test('time is zeroed out', function (t) {
  var localDate = new Date(2015, 6, 4, 12);
  t.equals(localDate.getHours(), 12, 'Date object has hours');

  var d = new JustDate(localDate);
  t.equals(d.date.getHours(), 0, 'JustDate object has no hours');

  t.end();
});

test('year is before 1000', function (t) {
  try {
    var d = new JustDate('999-07-04');
    t.equals(d.toString(), '999-07-04', 'toString returns years less than 1000');
  }
  catch (err) {
    t.fail('string constructor should work with years less than 1000');
  }

  t.end();
});
