import * as express from 'express';
import * as cors from 'cors';
// import cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { router as studentsRouter } from './routes/students';
import { connectDB } from './utils/db-utils';
import usersRouter from './routes/users';
import loginRouter from './routes/login';
import cookieParser = require('cookie-parser');

// TODO: Declare express session module wiht Session Data
declare module 'express-session' {
    export interface SessionData {
        username: string;
    }
}

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ type: 'application/json' }));

// TODO: Add cookieParser and expressSession middlewares
app.use(cookieParser());
app.use(session({
    secret: 'sessionSecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

// app.get('/', (request, response) => {
//     console.log('GET request received');

//     response.json('Successful');
// });

// app.post('/', (request, response) => {
//     const data = request.body;

//     console.log(data);

//     response.json('Successful');
// });

app.use('/students', studentsRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);

connectDB().then(() => {
    console.log('DB is listening on port 27017');
    app.listen(3001);
    console.log('Server is listening on port 3001');
}).catch(error => console.error(error));
