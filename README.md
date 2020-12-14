# Assignment 1 - ReactJS app.

Name: Kevin Power

## Features.

A bullet-point list of the ADDITIONAL user features implemented for the  Movies Fan app,
 
 + Watch List Button -  Adds movie's to the watch list page
 + Watch List Page - Page to display Watch list movies
 + Top Rated Movies Page - A new page to display top rated movies
 + Now Playing Movies Page - A new page to display Now Playing movies
 + Added Upcoming Movies Page - A new page for Upcoming movies 
 + Added Credits to movie details - Add credits to the movie details with a button to display them
 + Added Story Book Support for Credits - Added Story Book for Credits
 + Story Book for Movie Reviews - Added Movie Reviews Story book
 + Story Book for Favorites - Added the favorites button to story book

## Setup requirements (If required).

Download NPM package and run npm start to run the program.

## API Data Model.

Additional Endpoints used.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/credits - get movie credits
+ https://api.themoviedb.org/3/movie/now_playing - get list of now playing movies
+ https://api.themoviedb.org/3/movie/top_rated - get list of top rated movies
+ https://api.themoviedb.org/3/movie/upcoming - get list of upcoming movies

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ etc.
+ etc.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
