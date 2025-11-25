const movieContainer = document.querySelector('.movies');

async function displayMovie() {
    const movieData = localStorage.getItem('movieInfo');
    const poster = await fetch (`http://www.omdbapi.com/?apikey=4c277607&i=${movieData.imdbID}`)
    const posterImg = await poster.json();
    console.log(posterImg)

    movieContainer.innerHTML= posterImg.map(poster => `
      <img class="movie__img" src="${moviesData.Poster}" alt="${moviesData.Title}">
      <div class="movie__title">${moviesData.Title}</div>
      <div class="movie__year">${moviesData.Year}</div>
      `).join('');

}

displayMovie(); 

