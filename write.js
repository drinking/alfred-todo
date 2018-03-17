'use strict';
const alfy = require('alfy');
var fs = require('fs');

var filename = alfy.cache.get('path');

fs.readFile(filename, function(err, data) {
	if(err) throw err;
	var array = data.toString().split("\n");
	const others = array.filter(word => word.toString().indexOf(alfy.input) === -1).join('\n');
							
	const dones = array.filter(word => word.toString().indexOf(alfy.input) > -1)
						.map(x => (x.replace('- []','- [x]'))).join('\n');
		
					
	fs.writeFile(filename, others+'\n'+dones,'utf8', (err) => {
		if (err) {
			alfy.output([{title:"check finished",arg:"failure"}]);
			throw err;
		}
		alfy.output([{title:"check finished",arg:"success"}]);
	});
	
});




