'use strict';
const alfy = require('alfy');
var fs = require('fs');

var filename = alfy.cache.get('path');

fs.readFile(filename, function(err, data) {
	if(err) throw err;
	var array = data.toString().split("\n");
	const results = array.filter(word => (word.toString().indexOf(alfy.input) > -1 && word.toString().indexOf('x') === -1))
						.map(x => ({title: x,arg:x}));
	alfy.output(results);
});



