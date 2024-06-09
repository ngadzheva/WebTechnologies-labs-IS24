import { Request, Response } from 'express';
import { usersController } from '../controllers/users-controller';
import IUser from '../../../shared/interfaces/user';

const validateUser = async (request: Request, response: Response, next: () => void): Promise<void> => {
    // TODO: Implement
    const { username, password, confirmPassword, email } = request.body;

    const userData: IUser = { username, password, confirmPassword, email };

    const isUserDataValid = await usersController.validateUserData(userData);

    if (isUserDataValid.valid) {
        const userExists = await usersController.findUser(userData.username);

        if (userExists) {
            response.status(400).json('Username already exists');
            return;
        }

        next();
    } else {
        response.status(400).json(isUserDataValid.error);
    }
}

export default validateUser;