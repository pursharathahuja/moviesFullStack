import express from 'express';
import {
  getLatestMovies
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res) => {
  getLatestMovies().then(movies => res.status(200).send(movies));
});

export default router;