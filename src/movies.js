console.log('js conectado!')
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const movieDirectors = moviesArray.map((movie) => movie.director); 
  return movieDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter((movies) => movies.director === 'Steven Spielberg' && movies.genre.includes("Drama")); 
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(!moviesArray.length) return 0; 

   let sum = moviesArray.reduce((acc, movie) =>{
    if (movie.score) {
    return acc + movie.score
    } else return acc;
   }, 0);

let average = sum / moviesArray.length
return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama')}); 
    if(!dramaMovies.length) return 0;

  const sumScore = dramaMovies.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);

  const average = sumScore / dramaMovies.length; 
  
  return Number(average.toFixed(2));
  }; 
 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 
function orderByYear(moviesArray) {
  let yearArr =[...moviesArray];
  yearArr.sort((a,b) => {
    if (a.year > b.year){
      return 1;
    } else if (a.year < b.year) {
      return -1
    }
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title){
      return -1
    } else{ 
      return 0;
    }

  }); return yearArr;
}
 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
