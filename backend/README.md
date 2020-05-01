# Assignment 2 - Web API.

Name: Pursharath Ahuja

## Overview
This repo includes API's that fetches data from TMDB API's and maintains local data in cloud mongo db called atlas.
Developed using node and express framework.

## Installation Requirements
+ Install NPM (node package manager) 
+ Add code base via GIT (git clone https://github.com/pursharathahuja/moviesFullStack.git)
+ cd / backend
+ npm install
+ npm start or npm build
+ Make sure you have frontend code ready to serve.


## API Configuration
Cretae a .env file in project root ie: /backend/.env
+ Sample .env file contents:
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=9e6e5d4d2884cf5c4d088fe715ed6236
mongoDB=mongodb+srv://webdevuser:webdevpass@webdevassigment-vxonh.mongodb.net/moviesDatabase?retryWrites=true&w=majority
seedDb=true
secret=JsonWebTokenSecret
```

## Startup
To start use => npm start


## API Design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| ... | ... | ... | ... | ...


## Security and Authentication
Authentication via JWT is enabled on following API's
+ /api/movies
+ /api/genres
+ /api/latest-movies
A user must get a valid token first by using "/api/users" in order to access above services. 

## Testing
N/A
## Integrating with React App

Make sure the the backend server is live on port 8080 and the frontend is served on port 3000(happens by default after npm start)

## Extra features
+ User signUp => User can register and details will be saved Atlas DB.
### User bookings => User can book tickets and details will be saved in Atlas DB.
+ Create operation in create bookings.
+ Read operation in list bookings under my profile.
+ Delete operation in removing user favourites.
+ Update operation in updating user details(password) under myProfile section.

## Independent learning.

+ Live hosting via Amazon ec2 instance => http://52.18.211.206:3000/login
