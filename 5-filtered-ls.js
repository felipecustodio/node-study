var fs = require('fs');
var extension = "." + process.argv[3];
var files;
var item;
function readDir(callback) {
        fs.readdir(process.argv[2], function doneReading(err, dirContents) {
                for (item of dirContents) {
                        if (item.search(extension) > 0) {
                                console.log(item);
                        }
                }
                callback();
        });
}

function logDir() {
  console.log(files);
}

readDir(logDir);
