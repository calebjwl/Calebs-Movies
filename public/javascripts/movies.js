const moviesList = document.getElementById('movies-list');
const btnTitle = document.getElementById('btnTitle');
const btnRating = document.getElementById('btnRating');
const btnRuntime = document.getElementById('btnRuntime');
const btnYear = document.getElementById('btnYear');

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

function sortMoviesByProp(prop) {
  console.log(prop);
  movies.sort((a, b) => (a[prop] > b[prop]) ? 1 : -1);
  populateMovies();
}

// Click Events for the sort buttons
// Sort by title
btnTitle.addEventListener('click', () => sortMoviesByProp('title'));
// Sort by rating
btnRating.addEventListener('click', () => sortMoviesByProp('rating'));
// Sort by runtime
btnRuntime.addEventListener('click', () => sortMoviesByProp('runtime'));
// Sort by year
btnYear.addEventListener('click', () => sortMoviesByProp('year'));