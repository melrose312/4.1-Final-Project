const movieContainer = document.querySelector(".movies");
const movieList = document.querySelector(".movies");

let searchValue = "";

async function displayMovie() {
  const movieData = localStorage.getItem("imdbID");
  const poster = await fetch(
    `http://www.omdbapi.com/?apikey=4c277607&i=${movieData}`
  );
  const posterImg = await poster.json();

  movieContainer.innerHTML = `
    <div class="movie__card">
      <img class="movie__img" src="${posterImg.Poster}" alt="${posterImg.Title}">
      <div class="movie__title">${posterImg.Title}</div>
      <div class="movie__year">${posterImg.Year}</div>
      </div>
      `;
}

function redirectToMainWithParams() {
  window.location.href = `${window.location.origin}/index.html?search=${encodeURIComponent(searchValue)}`;
}

function onSearchChange(event) {
  searchValue = event.target.value;
}

displayMovie();


 