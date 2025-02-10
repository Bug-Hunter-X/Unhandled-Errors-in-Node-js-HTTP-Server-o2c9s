const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).listen(3000);

console.log('Server running at http://localhost:3000/');
//Error handling is missing for unexpected errors like network errors or request timeouts, potentially leading to server crashes or silent failures.