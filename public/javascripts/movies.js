const Http = new XMLHttpRequest();
Http.open("GET", '/movies');
Http.send();
Http.onloadend = () => showMovies();

function showMovies() {
  const movies = JSON.parse(Http.response);
  const moviesList = document.getElementById('movies-list');
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