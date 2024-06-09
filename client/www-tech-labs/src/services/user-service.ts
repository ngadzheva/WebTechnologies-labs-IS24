import axios from "axios";
import IUser from '../../../../shared/interfaces/user';

class UserService {
    private base = 'http://localhost:3001';

    createUser(userData: IUser) {
        return axios.post<string>(`${this.base}/users`, userData);
    }

    login(userData: IUser) {
        return axios.post<string>(`${this.base}/login`, userData);
    }
}

export const userService = new UserService();