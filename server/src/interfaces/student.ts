import { IMark } from "./mark";

interface IStudent {
    firstName: string;
    lastName: string;
    fn: number;
    mark: Array<IMark>;
    grade?: number;
    specialty?: string;
    userId?: string;
}

export interface IStudentData {
    students: IStudent[];
}

export default IStudent;
// export { IStudent };