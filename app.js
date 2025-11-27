// API Link http://www.omdbapi.com/?i=tt3896198&apikey=4c277607&s=fast MOVIES
// API LINK http://img.omdbapi.com/?apikey=4c277607&i=tt0232500  POSTERS

let searchValue = "";
const movieList = document.querySelector(".movies");
const params = new URLSearchParams(window.location.search);
const searchFromParams = params.get("search");
const searchInput = document.getElementById("searchInput");

if(searchFromParams) {
  main();
  searchInput.value = searchFromParams;
}

async function main() {
  if (!searchValue && !searchFromParams) return (movieList.innerHTML = "<p>Enter a Movie Title!</p>");
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=4c277607&s=${searchFromParams || searchValue}`
  );
  const moviesData = await movies.json();

  movieList.innerHTML =
    moviesData.Response === "True"
      ? moviesData.Search.slice(0, 6)
          .map((movie) => moviesDataHTML(movie))
          .join("")
      : `<p>No results found for '${searchValue}'</p>`;
  console.log("Search value is:", searchValue);
}

function onSearchChange(event) {
  searchValue = event.target.value;
}

function runSearch() {
  searchValue = document.getElementById("searchInput").value.trim();
  console.log("Searching for: ", searchValue); 
  main();
}

function showMovieInfo(moviesData) {
  localStorage.setItem("imdbID", moviesData);
  // window.location.href = "movie.html";
  window.location.href = `${window.location.origin}/movie.html`;
}

function moviesDataHTML(moviesData) {
  return `
    <div class="movie__card" onclick="showMovieInfo('${moviesData.imdbID}')">  
      <img class="movie__img" src="${moviesData.Poster}" alt=" ">
      <div class="movie__title">${moviesData.Title}</div>
      <div class="movie__year">${moviesData.Year}</div>
      </div>`;
}

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    runSearch();
  }
});


