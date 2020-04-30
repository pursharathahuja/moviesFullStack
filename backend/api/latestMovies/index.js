import express from 'express';
import {
  getLatestMovies
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res) => {
  getLatestMovies().then(genres => res.status(200).send(genres));
});

export default router;