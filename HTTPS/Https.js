const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((request , response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type' , 'text/html')
    response.end("<h1>Hello World</h1><p>This is Ishaan</p>")
})

server.listen(port , () => {
    console.log(`Server is Listening on port ${port}`)
})