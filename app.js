// const http = require('http');

// const server = http.createServer((req, res)=> {
// console.log(req.url, req.headers, req.method);
// res.setHeader('Content-Type', 'home/html');
// res.write('<html>');
// res.write('<head><title>My First page</title></head>');
// res.write('<body><h1>Welcome home</h1></body>');
// res.write('</html>');
// res.setHeader('Content-Type', 'about/html');
// res.write('<html>');
// res.write('<head><title>My First page</title></head>');
// res.write('<body><h1>Welcome to About Us page</h1></body>');
// res.write('</html>');
// res.setHeader('Content-Type', 'node/html');
// res.write('<html>');
// res.write('<head><title>My First page</title></head>');
// res.write('<body><h1>Welcome to my Node Js project</h1></body>');
// res.write('</html>');
// res.end();
// })

// server.listen(3000);

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const parsedUrl = url.parse(req.url, true);
    const message = parsedUrl.query.message || '';

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>Simple Node.js App</title>
        </head>
        <body>
          
          <div id="displayMessage"><h1>${message}</h1></div>
          <form action="/" method="post">
            <label for="message">Enter Message:</label>
            <input type="text" id="message" name="message" required>
            <button type="submit">Submit</button>
          </form>
          
        </body>
      </html>
    `);
    res.end();
  } else if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const postData = querystring.parse(body);
      const newMessage = postData.message || '';

      res.setHeader('Location', `/?message=${encodeURIComponent(newMessage)}`);
      res.writeHead(302); // Redirect status code
      res.end();
    });
  } else {
    res.writeHead(405, { 'Allow': 'GET, POST' });
    res.end('Method Not Allowed');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
