var fs = require('fs');
var lines = 0;

function countLines(callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    var text = String(fileContents);
    for (var i = 0; i < text.length; i++) {
            if (text[i] == '\n')
                lines++;
    }
    callback();
  });
}

function logLines() {
  console.log(lines);
}

countLines(logLines);
