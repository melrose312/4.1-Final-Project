// API Link http://www.omdbapi.com/?i=tt3896198&apikey=4c277607&s=fast MOVIES
// API LINK http://img.omdbapi.com/?apikey=4c277607&i=tt0232500  POSTERS


const movieList = document.querySelector(".movies");

async function main() {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=4c277607&s=fast`)
    const moviesData = await movies.json();
// Used slice to limit display of items to 9 on the page
    movieList.innerHTML = moviesData.Search.slice(0, 9).map((moviesData) => moviesDataHTML(moviesData)).join("")
    
}

main();

function showMovieInfo(moviesData) {
localStorage.setItem('imdbID', moviesData)
    // template string re-routes to actual URL of the webpage
  window.location.href = `${window.location.origin}/movie.html`
}




function moviesDataHTML(moviesData) {
    return `
    <div class="movie__card" onclick="showMovieInfo('${moviesData.imdbID}')">  
      <img class="movie__img" src="${moviesData.Poster}" alt=" ">
      <div class="movie__title">${moviesData.Title}</div>
      <div class="movie__year">${moviesData.Year}</div>
      </div>`;
}

