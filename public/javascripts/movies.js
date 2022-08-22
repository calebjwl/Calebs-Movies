const moviesList = document.getElementById('movies-list');
const sortedByText = document.getElementById('sorted-by');
const btnTitle = document.getElementById('btn-title');
const btnRating = document.getElementById('btn-rating');
const btnRuntime = document.getElementById('btn-runtime');
const btnYear = document.getElementById('btn-year');
const btnReverseSort = document.getElementById('btn-reverse');

let movies = [];

const Http = new XMLHttpRequest();
Http.open("GET", '/movies', true);
Http.send();
Http.onloadend = () => {
  movies = JSON.parse(Http.response);
  populateMovies();
};

function updateTitle(prop) {
  if (prop === 'name') {
    prop = 'title';
  }
  var capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  sortedByText.innerHTML = capitalizedProp;
}

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
  console.log('reverse sort')
  populateMovies();
}

// Click Events for the sort buttons
// Sort by title
btnTitle.addEventListener('click', () => sortByProp('name'));
// Sort by rating
btnRating.addEventListener('click', () => sortByProp('rating'));
// Sort by runtime
btnRuntime.addEventListener('click', () =>  sortAlphanumeric('runtime'));
// Sort by year
btnYear.addEventListener('click', () => sortByProp('year'));
//Reverse sort
btnReverseSort.addEventListener('click', reverseSort);

// todo: 
// check css (empty classes/unused rules/measurements)
// 'about' page?