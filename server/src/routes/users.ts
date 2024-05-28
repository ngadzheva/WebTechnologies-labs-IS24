import { Router, Request, Response } from 'express';
import { usersController } from '../controllers/users-controller';
import IUser from '../interfaces/user';
import errorHandler from '../middlewares/errorHandler';
import validateUser from '../middlewares/validateUser';

const users = Router();

users.post('/', validateUser, errorHandler(async (req: Request, res: Response) => {
    // TODO: Implement
    const { username, password, email } = req.body;

    const user = await usersController.createUser({ username, password, email });

    res.status(201).json('User created successfully');
}));

export default users;