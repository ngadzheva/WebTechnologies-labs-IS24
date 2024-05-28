import { Request, Response } from 'express';
// import * as bcrypt from 'bcrypt';
import { usersController } from '../controllers/users-controller';

const validateAuthUser = async (request: Request, response: Response, next: () => void): Promise<void> => {
    // TODO: Implement
    const { username, password } = request.body;

    const isUserValid = await usersController.validUser(username, password);

    if (isUserValid.valid) {
        next();
    } else {
        response.status(401).json(isUserValid.error);
    }
}

export default validateAuthUser;