import IStudent, { IStudentData } from "../interfaces/student";
import { read, write } from "../utils/file-utils";

class StudentsController {
    private studentsData: IStudentData;

    constructor() { }

    public async init() {
        const studentJSON = await read('./resources/students.json');

        this.studentsData = JSON.parse(studentJSON);
    }

    public getStudentsData() {
        return this.studentsData;
    }

    public getStudentById(fn: number) {
        return this.studentsData.students.find((student: IStudent) => student.fn === Number(fn));
    }

    public async updateStudentByFn(fn: number, studentData: Partial<IStudent>): Promise<IStudent | undefined> {
        const studentIndex: number = this.studentsData.students.findIndex((student: IStudent) => student.fn === Number(fn));

        if (studentIndex > 0) {
            this.studentsData.students[studentIndex] = {
                ...this.studentsData.students[studentIndex],
                ...studentData
            };

            await this.saveStudent();

            return this.studentsData.students[studentIndex];
        }

        return undefined;
    }

    private async saveStudent() {
        await write('./resources/students.json', JSON.stringify(this.studentsData));
    }
}

export const studentsController = new StudentsController();