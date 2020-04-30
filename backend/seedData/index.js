import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
}

export async function removeFavourites() {
    console.log('remove favourites');
      try {
        await movieModel.deleteMany();
      } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
      }
}