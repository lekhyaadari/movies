let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}
let firstMovie = (m) => {
    allMovies.push(m);
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    document.write("<br>A new movie is added");
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    document.write("<br>Printing all movies...<br>");
    for (const movie of allMovies) {
        document.write(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched + "<br>");
    }
    document.write("<br>");
    document.write("<br>You have " + (allMovies.length) + " movies in total");
}

//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    document.write("<br>printing movie that has a rating higher than " + rating + "<br>");
    const highRatedMovies = allMovies.filter((movie) => movie.rating > rating);
    for ( const movie of highRatedMovies) {
        document.write(movie.title + " has a rating of " + rating + "<br>");
    }
    document.write("<br>");
    document.write("<br>In total, there are " + highRatedMovies.length + " matches");
}

//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    const movie = allMovies.find((movie) => movie.title === title);
    if (movie) {
        movie.haveWatched = !movie.haveWatched;
        document.write("<br>changing the status of the movie...");
    } else {
        document.write("<br>");
    }
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

firstMovie(x);
firstMovie(y);
firstMovie(z);

/*replace document.write with display on web page*/
document.write("<br>----------------");
document.write("<br>running program......");
document.write("<br>----------------");
printMovies();

let movie1 = new Movie("Parasite", 2, false);

/*replace document.write with display on web page*/
document.write("<br>----------------");
addMovie(movie1);
document.write("<br>----------------");

changeWatched("Spiderman");
/*replace document.write with display on web page*/
document.write("<br>----------------");

printMovies();

/*replace document.write with display on web page*/
document.write("<br>----------------");

changeWatched("Spiderman");
/*replace document.write with display on web page*/
document.write("<br>----------------");

printMovies();
/*replace document.write with display on web page*/
document.write("<br>----------------");

highRatings(3.5);