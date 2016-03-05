// Dependencies:
var inspect = require('util').inspect;
var htmlEncodings = require('./index.js');

// Inspecting the first 20 entries yields:
console.log('js', inspect(htmlEncodings.slice(0, 20)));
