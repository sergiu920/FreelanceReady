import { createUser, findUserByEmail } from "../models/User";

export async function register(req, res, body) {

    const { name, email, password } = body;

    if( !name || !email || !password ) {
        res.writeHead(400, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'Name, email, and password are required' }));

        return;
    }

    const existingUser = await findUserByEmail(email);
    if(existingUser) {
        res.writeHead(409, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Email already registered' }))

        return;
    }

    const newUser = await createUser({ name, email, password });

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(
        JSON.stringify({
            message: 'User registered successfully',
            user: newUser,
        })
    )
}

