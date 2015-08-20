var test = require('tape');
var JustDate = require('./index');

test('module exists', function (t) {
  t.equals(typeof JustDate, 'function', 'Module should export a function');
  t.end();
});
