const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    
    if(request.url == '/'){
        request.statusCode = 200;
        response.end("<h1>Hello World</h1><p>This is Ishaan</p>");
    } else if(request.url == '/about'){
        request.statusCode = 200;
        response.end("<h1>About Hello World</h1><p>Ishaan is what it's all about</p>");
    } else {
        // request.IshaanJoshi();
        request.statusCode = 404;
        response.end("<h1>Page not found on the server</h1>");
    }

});

server.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});
