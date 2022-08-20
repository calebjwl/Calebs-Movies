const moviesList = document.getElementById('movies-list');

let movies = [];

const Http = new XMLHttpRequest();
Http.open("GET", '/movies', true);
Http.send();
Http.onloadend = () => {
  movies = JSON.parse(Http.response);
  populateMovies();
};

function populateMovies() {
  moviesList.innerHTML = movies.map(movie => {
    return (`
      <li class="movie">
        <h2 class="movie-name">${movie.name}</h2>
        <ul class="movie-details">
          <li class="movie-details-item">${movie.rating}</li>
          <li class="movie-details-item">${movie.runtime}</li>
          <li class="movie-details-item">${movie.year}</li>
        </ul>
      </li>
    `);
  }).join('');
}

function reverseSort() {
  movies.sort().reverse();
  populateMovies();
}

function sortByTitle() {
  console.log('tite');
  movies.sort((a, b) => (a.name > b.name) ? 1 : -1);
  populateMovies();
}

function sortByRating() {
  console.log('rate')
  movies.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
  populateMovies();
}

function sortByRuntime() {
  console.log('runtim')
  movies.sort((a, b) => (a.runtime > b.runtime) ? 1 : -1);
  populateMovies();
}

function sortByYear() {
  console.log('year')
  movies.sort((a, b) => (a.year > b.year) ? 1 : -1);
  populateMovies();
}

// Click Events for the sort buttons
// Sort by title
btnTitle.addEventListener('click', sortByTitle);
// Sort by rating
btnRating.addEventListener('click', sortByRating);
// Sort by runtime
btnRuntime.addEventListener('click', sortByRuntime);
// Sort by year
btnYear.addEventListener('click', sortByYear);