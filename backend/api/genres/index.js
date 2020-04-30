import express from 'express';
import {
  getGenres
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res) => {
  getGenres().then(genres => res.status(200).send(genres));
});

export default router;