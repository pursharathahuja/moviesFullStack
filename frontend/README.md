# Assignment 1 - ReactJS app.

Name: Pursharath Ahuja (20087434)

## Overview.
Additional features added
 + Homepage showing best movies of all times. 
 + Latest movies listing on click on book tickets.
 + Buy tickets details page with useForm.
 + Bookings list under my profile page.
 + Profile page with password update field
 + Add and remove favourites
 + Add reviews and listing both local and TMDB reviews
 + List of Actors on movie detail page
 + List of Crew on movie detail page
 + Sign in/ Sign Up via google (note: This feature will work on localhost only as google only allows named addresses in whitelist and live hosting uses free tier amazon ec2 instance that can only be accessed via IP address.)

## Setup requirements.

+ Install NPM (node package manager) 
+ Add code base via GIT (git clone https://github.com/pursharathahuja/moviesFullStack.git)
+ cd / frontend
+ npm install
+ Make sure to serve backend code first.
+ npm start or npm build

## Data Model Design.
### API's used:
+ /api/movies => GET request to list of best movies of all time.
+ /api/latest-movies => GET request to list of Latest movies showing in cinemas.
+ /api/movies/${id}  => GET request to get specific movie details.
+ /api/genres => GET request to get a list of genres.
+ /api/movies/${id}/reviews => GET request for specific movie reviews.
+ /api/movies/${id}/credits => GET request to for actors list for a specific movie.
+ /api/movies/${id}/credits => GET request for a list of crew members for a specific movie.
+ /api/users => POST reuest for user login.
+ /api/users/${username} => PUT request to update logged in user's details.
+ /api/users?action=register => POST request to register a user.
+ /api/users/${user}/favourites => POST request to add favourites to a user.
+ /api/users/${user}/favourites/${movie.id} => DELETE request to remove favourites.
+ /api/users/${user}/favourites => GET request to list all favourites of a specif user.
+ /api/users/${user}/bookings => GET request to list all user bookings.
+ /api/movies/${movieId}/reviews => POST request to add a review for a movie.
+ /api/users/${user}/bookTickets => POST request to create a booking for a movie.

## App Design.

### Component catalogue.
+ AllCasts Component
+ AllCrew Component
+ Buttons Component- AddReview
+ Buttons Component- AddToFavourites
+ Buttons Component- BuyTickets
+ Buttons Component- Removefavourites
+ FilterControls Component
+ HeaderMovie Component
+ HeaderMovieList Component
+ LoginForm Component
+ MovieCard Component
+ MovieDetails Component
+ MovieList Component
+ MovieReview Component
+ MovieReviews Component
+ SignUpForm Component
+ ReviewForm Component
+ SiteHeader Component
+ TemplateMovieList Component
+ TemplateMoviePage Component
### Design patterns.
### New occurrences.
+ AllCasts Component
+ AllCrew Component
+ Buttons Component- BuyTickets
+ Buttons Component- Removefavourites
+ LoginForm Component
+ SignUpForm Component

## UI Design.



## Routing.
. . . . List each route supported by your app and state the associated view. For expansion of the Movies Fan app, only new routes should be listed. Hi-light any advanced routing cases, e.g. nested routes. If relevant, specify which of the routes require authentication. . . . . . 

+ /foos - displays all published foos.
+ /foos/:id - detail view of a particular foo (:id).
+ etc.
+ etc.

## Independent learning.

. . . . . State the aspects of your app codebase that required independent learning/research on your behalf. Mention the technology/technique used and include source references. (See the assignment specification for examples.) 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png