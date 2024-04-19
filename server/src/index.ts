import * as express from 'express';
import { router as studentsRouter } from './routes/students';
import { connectDB } from './utils/db-utils';

const app = express();

app.use(express.json({ type: 'application/json' }));

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

connectDB().then(() => {
    console.log('DB is listening on port 27017');
    app.listen(3001);
    console.log('Server is listening on port 3001');
}).catch(error => console.error(error));
