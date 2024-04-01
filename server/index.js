const { createServer } = require('http');

const app = createServer((request, response) => {
    console.log('Request received');

    console.log(request.headers);
    console.log(request.method);
    console.log(request.url);

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end('Request ended successfully');
});

app.listen(3001);

console.log('Server is listening');