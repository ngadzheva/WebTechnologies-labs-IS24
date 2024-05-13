import * as mongoose from "mongoose";
import IStudent, { IStudentData } from "../interfaces/student";
import { Student, StudentDocument } from "../models/student";
import { read, write } from "../utils/file-utils";

class StudentsController {
    private studentsData: IStudentData;

    constructor() { }

    // public async init() {
    //     const studentJSON = await read('./resources/students.json');

    //     this.studentsData = JSON.parse(studentJSON);
    // }

    public async getStudentsData(limit: number, offset: number) {
        return await Student.find({});
    }

    public async getStudentById(fn: number) {
        return await Student.find({ fn });
    }

    public async createStudent(student: IStudent) {
        const newStudent = {
            _id: new mongoose.Types.ObjectId(),
            ...student
        };

        return await Student.create(newStudent);
    }

    public async updateStudentByFn(fn: number, studentData: Partial<IStudent>): Promise<number> {
        const updatedStudent = await Student.updateOne({ fn }, studentData);

        return updatedStudent.modifiedCount;
    }

    public async deleteStudentByFn(fn: number) {
        const deletedStudent = await Student.deleteOne({ fn });

        return deletedStudent.deletedCount;
    }

    private async saveStudent() {
        await write('./resources/students.json', JSON.stringify(this.studentsData));
    }
}

export const studentsController = new StudentsController();