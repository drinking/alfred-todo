'use strict';
const alfy = require('alfy');
var fs = require('fs');

var filename = alfy.cache.get('path');
fs.appendFileSync(filename, "- [] "+alfy.input+"\n");




