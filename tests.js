var test = require('tape');
var LocalTime = require('./index');

test('module exists', function (t) {
  t.equals(typeof LocalTime, 'function', 'Module should export a function');
  t.end();
});
