var path = require('path');
var less = require('less');
var tester = require('less/test/less-test')();
var plugin = require(path.join(__dirname, '..', 'dist', 'plugin'));

var options = { strictMath: true, silent: true, plugins: [plugin] };

tester.runTestSet(options, 'functions/');

if (tester.finish) {
  test.finish();
}
