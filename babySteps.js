var http = require('http');
var fs = require('fs');

var sumOf = function(contents){
	var sum = 0;
	for (var i = 2; i < contents.length; i++) {
		sum += Number(contents[i]);
	}

	return sum.toString();
}

//console.log(process.argv);

console.log(sumOf(process.argv));