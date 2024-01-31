const http = require('http');

const server = http.createServer((req, res)=> {
console.log(req.url, req.headers, req.method);
res.setHeader('Content-Type', 'home/html');
res.write('<html>');
res.write('<head><title>My First page</title></head>');
res.write('<body><h1>Welcome home</h1></body>');
res.write('</html>');
res.setHeader('Content-Type', 'about/html');
res.write('<html>');
res.write('<head><title>My First page</title></head>');
res.write('<body><h1>Welcome to About Us page</h1></body>');
res.write('</html>');
res.setHeader('Content-Type', 'node/html');
res.write('<html>');
res.write('<head><title>My First page</title></head>');
res.write('<body><h1>Welcome to my Node Js project</h1></body>');
res.write('</html>');
res.end();
})

server.listen(3000);