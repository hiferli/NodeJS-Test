const http = require("http");
const files = require("fs");
const port = process.env.PORT || 3000;
const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    
    if(request.url == '/'){
        response.statusCode = 200;
        const website = files.readFileSync('index.html')
        response.end(website.toString());
    } else if(request.url == '/about'){
        request.statusCode = 200;
        response.end("<h1>About Hello World</h1><p>Ishaan is what it's all about</p>");
    } else if (request.url == '/hello'){
        request.statusCode = 200;
        response.end("<h1>Hello World</h1><p>This is Ishaan</p>");
    } else {
        // request.IshaanJoshi();
        request.statusCode = 404;
        response.end("<h1>Page not found on the server</h1>");
    }

});

server.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});
