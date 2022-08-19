const moviesList = document.getElementById('movies-list');
const btnAsc = document.getElementById('asc');
const btnDes = document.getElementById('des');

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

function sortAsc() {
  movies.sort();
  populateMovies();
}

function sortDes() {
  movies.sort().reverse();
  populateMovies();
}

// Click Events for the sort buttons
// Sort by title
btnAsc.addEventListener('click', sortAsc);
btnDes.addEventListener('click', sortDes);

// Sort by rating
// Sort by runtime
// Sort by year