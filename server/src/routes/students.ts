import { Router, Response, Request } from 'express';
import { read, write } from '../utils/file-utils';
import IStudent from '../interfaces/student';
import { studentsController } from '../controllers/students-controller';

const router = Router();

const loadStudentsData = async (request: Request, response: Response, next: () => void) => {
    try {
        await studentsController.init();

        next();
    } catch (error) {
        console.error(error);

        response.status(500).json({ message: 'Internal server error' });
    }
}

router.use(loadStudentsData);

router.get('/', async (_, response: Response) => {
    response.status(200).json(studentsController.getStudentsData());
});

router.get('/:fn', async (request: Request, response: Response) => {
    // { fn: value }
    const { fn } = request.params;

    if (isNaN(Number(fn))) {
        response.status(400).json({ message: "Invalid FN" });
        return;
    }

    const student = await studentsController.getStudentById(Number(fn));

    if (!student) {
        response.status(404).json({ message: 'Student not found' });
        return;
    }

    response.json(student);
});

router.put('/:fn', async (request: Request, response: Response) => {
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

export { router };