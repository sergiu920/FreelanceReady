import http from 'node:http';
import 'dotenv/config';
import { router } from './routes/router.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    router(req, res).catch((err) => {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Server error', details: err.message }))
    })
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})