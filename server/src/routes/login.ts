import { Router, Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import validateAuthUser from '../middlewares/validateAuthUser';

const login: Router = Router();

login.post('/', validateAuthUser, async (request: Request, response: Response) => {
    // TODO: Implement
    const { username, rememberMe } = request.body;

    request.session.username = username;

    if (rememberMe) {
        const usernameHash = await bcrypt.hash(username, 10);
        const expirationTime = new Date().getSeconds() + 24 * 60 * 60 * 30;

        response.cookie('remember', usernameHash, { expires: new Date(expirationTime) });
        response.setHeader('Set-Cookie', 'remember');
    }

    response.status(200).json('User logged in successfully');
});

export default login;