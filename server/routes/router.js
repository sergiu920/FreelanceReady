import { register } from '../controllers/authController.js';
import { parseBody } from '../utils/parseBody.js';

export async function router(req, res) {

    if(req.method === 'POST' && req.url === '/api/register') {
        const body = await parseBody(req);

        return register(req, res, body);
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
}