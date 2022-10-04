const path = require('path');

const name = path.basename("C://Temp//MyFile.html")
const directory = path.dirname("C://Temp//MyFile.html")

console.log(name);
console.log(directory)

const fileExtn = path.extname(__filename);
console.log(fileExtn)