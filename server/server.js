import http from 'node:http';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain'});
    res.end('Server is running');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})