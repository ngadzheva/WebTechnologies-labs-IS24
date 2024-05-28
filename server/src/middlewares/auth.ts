import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { usersController } from '../controllers/users-controller';

const auth = async (request: Request, response: Response, next: () => void): Promise<void> => {
    // TODO: Implement
    const { username } = request.session;

    console.log(request.session)
    console.log(request.cookies)

    if (username) {
        const user = await usersController.findUser(username);

        if (user) {
            next();
        } else {
            response.status(401).json('Unauthorized');
        }
    } else {
        const { remember } = request.cookies;

        if (remember) {
            const users = await usersController.getUsers();

            const userExists = await users.find(async (user) => {
                return await bcrypt.compare(user.username, remember);
            });

            if (userExists) {
                request.session.username = userExists.username;
                next();
            } else {
                response.status(401).json('Unauthorized');
            }
        } else {
            response.status(401).json('Unauthorized');
        }
    }
}

export default auth;