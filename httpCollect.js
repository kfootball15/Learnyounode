var http = require('http');

http.get(process.argv[2], callback);

function callback(response){
  var string = '';
  response.on('data', function(data){
    string += data.toString();
  });

  response.on('end', function(){
    console.log(string.length);
    console.log(string)
  });
}

