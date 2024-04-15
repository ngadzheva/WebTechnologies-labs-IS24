interface IStudent {
    firstName: string;
    lastName: string;
    fn: number;
    mark: number;
    age?: number;
}

export interface IStudentData {
    students: IStudent[];
}

export default IStudent;
// export { IStudent };