// API Link http://www.omdbapi.com/?i=tt3896198&apikey=4c277607&s=fast MOVIES
// API LINK http://img.omdbapi.com/?apikey=4c277607&i=tt0232500  POSTERS

let searchValue = "";
const movieList = document.querySelector(".movies");

async function main() {
  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=4c277607&s=${searchValue}`
  );
  const moviesData = await movies.json();

  if (!searchValue) return (movieList.innerHTML = "<p>Enter a Movie Title</p>");
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
  //get movie result[0].imdbID;
  // localStorage.setItem("movieData", movieID);
  // window.refresh();
  main();
}

function showMovieInfo(moviesData) {
  localStorage.setItem("imdbID", moviesData);
  // template string re-routes to actual URL of the webpage
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


