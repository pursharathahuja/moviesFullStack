import { Router } from 'express';
const router = Router();
import request from 'request';
import config from 'config';




// movie database API key
const apiKey = config.get('api-key');

// Discover movies
router.get('/', (req,res) => {
    request({
        uri: 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&include_adult=false&page=1'
        }).pipe(res);
});

// Get genres list
router.get('/genre', (req,res) => {
  request({
      uri: 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey + '&language=en-US'
    }).pipe(res);
});

// Now playing movies
// router.get('/', (req,res) => {
//     request({
//         uri: 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&language=en-US&page=1'
//       }).pipe(res);
// });


export default router;