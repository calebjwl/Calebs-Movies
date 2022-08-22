const moviesList = document.getElementById('movies-list');
const sortedByText = document.getElementById('sorted-by');
const btnTitle = document.getElementById('btn-title');
const btnRating = document.getElementById('btn-rating');
const btnRuntime = document.getElementById('btn-runtime');
const btnYear = document.getElementById('btn-year');
const btnReverseSort = document.getElementById('btn-reverse');

var movies = [];

const Http = new XMLHttpRequest();
Http.open("GET", '/movies', true);
Http.send();
Http.onloadend = () => {
  movies = JSON.parse(Http.response);
  populateMovies();
};

// DOM manipulation functions
function populateMovies() {
  moviesList.innerHTML = movies.map(movie => {
    return (`
      <li class="movie">
        <div class="movie__image">
          <img class="movie__image" src="./images/${movie.src}.jpg" alt="${movie.name} (${movie.year})" />
        </div>
        <div class="movie__info">
          <h2 class="movie__title">${movie.name} <span class="movie__year">(${movie.year})</span></h2>
          <ul class="movie__details">
            <li class="movie__rating">${movie.rating}</li>
            <li class="movie__runtime">${movie.runtime}</li>
          </ul>
          <p class="movie__desc">${movie.description}</p>
        </div>
      </li>
    `);
  }).join('');
}

function updateTitle(prop) {
  if (prop === 'name') {
    prop = 'title';
  }
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  sortedByText.innerHTML = capitalizedProp;
}

// Sort functions
function sortByProp(prop) {
  movies.sort((a, b) => (a[prop] > b[prop]) ? 1 : (a[prop] === b[prop]) ? 0 : -1);
  updateTitle(prop);
  populateMovies(prop);
}

function sortAlphanumeric(prop) {
  movies.sort((a, b) => {
    return a[prop].localeCompare(b[prop], undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  });
  updateTitle(prop);
  populateMovies(prop);
}

function reverseSort() {
  movies.sort().reverse();
  populateMovies();
}

// Click events
btnTitle.addEventListener('click', () => sortByProp('name'));
btnRating.addEventListener('click', () => sortByProp('rating'));
btnRuntime.addEventListener('click', () =>  sortAlphanumeric('runtime'));
btnYear.addEventListener('click', () => sortByProp('year'));
btnReverseSort.addEventListener('click', reverseSort);