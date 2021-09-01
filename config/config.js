import express from 'express';
import bodyparser from 'body-parser';
import jwt from 'jsonwebtoken';


import router from '../route/index.js';


const app = express();


app.use(bodyparser.json());

app.use('/identity',router);
app.use('/api',router);
app.use('/api/v0',router);

export default app;