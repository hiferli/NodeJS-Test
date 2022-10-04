const files = require('fs');


// files.readFile('Notebook.txt' , 'utf-8' , (error , text) => {
//     console.log(text)
// })

const a = files.readFileSync('Notebook.txt')
console.log(a.toString())

const b = files.writeFileSync('Sample.txt' , 'This is the file I made. Hope you are having a good day!')
console.log(b);

console.log("Finished reading the file")