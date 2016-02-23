//  You must write a module file to do most of the work. The module must
 //  export a single function that takes three arguments: the directory name,
 //  the filename extension string and a callback function, in that order. The
 //  filename extension argument must be the same as what was passed to your
 //  program. Don't turn it into a RegExp or prefix with "." or do anything
 //  except pass it to your module where you can do what you need to make your
 //  filter work.

// HINTS

// Create a new module by creating a new file that just contains your
// directory reading and filtering function. To define a single function
// export, you assign your function to the module.exports object, overwriting
// what is already there:

//    module.exports = function (args) { /* ... */ }

// Or you can use a named function and assign the name.

// To use your new module in your original program file, use the require()
// call in the same way that you require('fs') to load the fs module. The
// only difference is that for local modules must be prefixed with './'. So,
// if your file is named mymodule.js then:

//    var mymodule = require('./mymodule.js')

// The '.js' is optional here and you will often see it omitted.

// You now have the module.exports object in your module assigned to the
// mymodule variable. Since you are exporting a single function, mymodule is
// a function you can call!

// Also keep in mind that it is idiomatic to check for errors and do
// early-returns within callback functions:

//    function bar (callback) {
//      foo(function (err, data) {
//        if (err)
//          return callback(err) // early return

//        // ... no error, continue doing cool things with `data`

//        // all went well, call callback with `null` for the error argument

//        callback(null, data)
//      })
//    }

var fs = require('fs');

module.exports = function(dirName, extension, callback){
  // var file = fs.createReadStream("dirName");
  var array = dirName.toString().split('\n');
  var finalArray = [];
  
  function callback(err, data){
    // if (err)
    //   return callback(err);
    // else 
      for (var i = 0; i < array.length; i++) {
        var ext = array[i].substr(fileName.lastIndexOf('.'));
        if (extension === ext){
          finalArray.push(array[i]);
        }
      }
  //   callback(null, data);
  // }
  }
}

  // callback(function(err, data){
  //   if (err)
  //     return callback(err)

  //     return array;
  //   callback(null, data)
  // })










