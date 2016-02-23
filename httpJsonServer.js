var http = require('http');
var fs = require('fs');
var url = require('url');


// var server = http.createServer(function(request, response){
//   res.writeHead(200, { 'Content-Type': 'application/json' });

//   Qstring = url.parse(request.url, true);
//   Qstring.query

//   var file = fs.createReadStream(r)

// })

// server.listen(process.argv[2]);

Qstring = url.parse(, true);
console.log(Qstring.query);






//---

// var server = http.createServer(function(request, response){
//   response.writeHead(200);
//   fs.createReadStream(process.argv[3]).pipe(response)
// })
// server.listen(Number(process.argv[2]));


// var http = require('http');

// http.get(process.argv[2], callback);

// function callback(response){
//   var string = '';
//   response.on('data', function(data){
//     string += data.toString();
//   });

//   response.on('end', function(){
//     console.log(string.length);
//     console.log(string)
//   });
// }