const movieContainer = document.querySelector(".movies");
const movieList = document.querySelector(".movies");

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

function runSearch() {
  searchValue = document.getElementById("searchInput").value.trim();
  console.log("Searching for: ", searchValue);
  main();
  //get movie result[0].imdbID;
  // localStorage.setItem("movieData", movieID);
  // window.refresh();
}

function onSearchChange(event) {
searchValue = event.target.value;
}

displayMovie();
