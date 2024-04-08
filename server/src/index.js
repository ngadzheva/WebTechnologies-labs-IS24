const express = require('express');
const { router: studentsRouter } = require('./routes/students');

const app = express();

app.use(express.json('application/json'));

app.get('/', (request, response) => {
    console.log('GET request received');

    response.json('Successful');
});

app.post('/', (request, response) => {
    const data = request.body;

    console.log(data);

    response.json('Successful');
});

app.use('/students', studentsRouter);

app.listen(3001);

console.log('Server is listening on port 3001');