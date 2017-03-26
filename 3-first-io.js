var fs = require('fs')
var lines = 0
var text = String(fs.readFileSync(process.argv[2]))
for (var i = 0; i < text.length; i++) {
        if (text[i] == '\n')
                lines++
}
console.log(lines)
