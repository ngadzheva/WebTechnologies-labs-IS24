import { Router, Response, Request, request } from 'express';
import IStudent from '../interfaces/student';
import { studentsController } from '../controllers/students-controller';
import auth from '../middlewares/auth';

const router = Router();

const loadStudentsData = async (request: Request, response: Response, next: () => void) => {
    try {
        // await studentsController.init();

        next();
    } catch (error) {
        console.error(error);

        response.status(500).json({ message: 'Internal server error' });
    }
}

router.use(loadStudentsData);

router.get('/', auth, async (request: Request, response: Response) => {
    const { limit, offset } = request.query;

    if (limit && isNaN(Number(limit))) {
        response.status(400).json({ message: "Invalid limit" });
        return;
    }

    const students = await studentsController.getStudentsData(Number(limit), Number(offset));
    response.status(200).json(students);
});

router.get('/:fn', auth, async (request: Request, response: Response) => {
    // { fn: value }
    const { fn } = request.params;

    if (isNaN(Number(fn))) {
        response.status(400).json({ message: "Invalid FN" });
        return;
    }

    const student = await studentsController.getStudentById(Number(fn));

    if (student.length === 0) {
        response.status(404).json({ message: 'Student not found' });
        return;
    }

    response.json(student);
});

router.put('/:fn', auth, async (request: Request, response: Response) => {
    const data: Partial<IStudent> = request.body;
    const { fn } = request.params;

    if (isNaN(Number(fn))) {
        response.status(400).json({ message: "Invalid FN" });
        return;
    }

    const student = await studentsController.updateStudentByFn(Number(fn), data);

    if (!student) {
        response.status(404).json({ message: 'Student not found' });
        return;
    }

    response.status(200).json({ message: 'Student updated successfully' });
});

router.post('/', auth, async (request: Request, response: Response) => {
    const studentData: IStudent = request.body;

    const student = await studentsController.createStudent(studentData);

    if (student) {
        response.status(201).json(student);
    } else {
        response.status(400).json("Student wasn't created successfully")
    }
});

router.delete('/:fn', auth, async (request: Request, response: Response) => {
    const { fn } = request.params;

    const deletedStudent = await studentsController.deleteStudentByFn(Number(fn));

    if (!deletedStudent) {
        response.status(404).json('Student not found')
    } else {
        response.status(200).json('Student deleted')
    }
})

export { router };