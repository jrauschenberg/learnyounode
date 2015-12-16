var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(error, data) {
  if (!error) {
    var contents = data.split("\n");
    console.log(contents.length - 1);
  } else {
    console.log(error.message);
  }
});