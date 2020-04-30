import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import latestMoviesRouter from './api/latestMovies';
import bodyParser from 'body-parser';
import './db';
import usersRouter from './api/users';
import session from 'express-session';
import passport from './authenticate';

dotenv.config();

export const app = express();
const port = process.env.PORT;

const errorHandler=(err,req,res,next)=>{
  console.log(err);
  res.status(500).json({status: 500, message:"Internal Server Error"});
}

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

// initialise passport
app.use(passport.initialize());

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/genres', passport.authenticate('jwt', {session: false}), genresRouter);
app.use('/api/latest-movies', passport.authenticate('jwt', {session: false}), latestMoviesRouter);
app.use('/api/users', usersRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});