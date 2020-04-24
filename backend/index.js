import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import config from 'config';

import moviesApi from './routes/movies';

dotenv.config();
const app = express();
app.use(json());


// list movies
app.use('/movies', moviesApi);


const port = process.env.PORT;
app.listen(port, () => console.log(`Backend live on port ${port}`));