const { Router } = require('express');
const { read, write }  = require('../utils/file-utils.js');

const router = Router();

router.get('/', async (_, response) => {
    try {
        const studentsData = await read('./resources/students.json');
    
        response.json(JSON.parse(studentsData));
    } catch(error) {
        console.error(error);

        response.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:fn', async (request, response) => {
    // { fn: value }
    const { fn } = request.params;

    if (isNaN(fn)) {
        response.status(400).json({ message: "Invalid FN" });
        return;
    }

    try {
        const studentsData = await read('./resources/students.json');
        const students = JSON.parse(studentsData);
        const student = students.students.find((student) => student.fn === fn);

        if (!student) {
            response.status(404).json({ message: 'Student not found' });
            return;
        }

        response.json(student);
    } catch(error) {
        console.error(error);

        response.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:fn', async (request, response) => {
    const data = request.body;
    const { fn } = request.params;

    if (isNaN(fn)) {
        response.status(400).json({ message: "Invalid FN" });
        return;
    }

    try {
        const studentsData = await read('./resources/students.json');
        const students = JSON.parse(studentsData);
        const studentIndex = students.students.findIndex((student) => student.fn === fn);

        if (studentIndex < 0) {
            response.status(404).json({ message: 'Student not found' });
            return;
        }

        students.students[studentIndex] = data;

        await write('./resources/students.json', JSON.stringify(students));

        response.json(students.students[studentIndex]);
    } catch(error) {
        console.error(error);

        response.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = { router };