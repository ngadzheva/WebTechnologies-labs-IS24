import axios from "axios";
import IStudent from '../../../../shared/interfaces/student';

class StudentsService {
    private url = 'http://localhost:3001/students';

    getStudents() {
        return axios.get<IStudent[]>(this.url);
    }

    deleteStudents(fn: number) {
        return axios.delete<string>(`${this.url}/${fn}`);
    }
}

export const studentsService = new StudentsService();