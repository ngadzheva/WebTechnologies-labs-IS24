import IUser from "../interfaces/user";
import * as bcrypt from 'bcrypt';
import { User } from "../models/user";

export class UsersController {
    constructor() {}

    public async getUsers() {
        return await User.find({});
    }

    public async findUser(username: string) {
        return await User.findOne({ username: username });
    }

    public async createUser(userData: IUser) {
        // TODO: Implement
        const passwordHash = await bcrypt.hash(userData.password, 10);
        userData.password = passwordHash;

        return User.create(userData);
    }

    public async validUser(username: string, password: string) {
        // TODO: Implement
        if (!username || !password) {
            return {
                valid: false,
                error: 'Username or password is incorrect'
            };
        }

        console.log(username)

        const user = await this.findUser(username);

        if (!user) {
            return {
                valid: false,
                error: 'Username or password is incorrect'
            };
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return {
                valid: false,
                error: 'Username or password is incorrect'
            };
        }

        return { valid: true };
    }

    public validateUserData(userData: IUser) {
        // TODO: Implement
        if (userData.username.length < 3 || userData.username.length > 20) {
            return {
                valid: false,
                error: 'Username must be between 3 and 20 symbols'
            };
        }

        if (userData.password.length < 6 || userData.password.length > 10) {
            return {
                valid: false,
                error: 'Password must be between 6 and 10 symbols'
            };
        }

        if (userData.password !== userData.confirmPassword) {
            return {
                valid: false,
                error: 'Confirm password does not match password'
            }
        }

        if (userData.email.length && !userData.email.match(/[a-zA-z1-9]+@[a-zA-z]+/)) {
            return {
                valid: false,
                error: 'Email is incorrect'
            }
        }

        return { valid: true };
    }
}

export const usersController = new UsersController();