
async function main() {
    const movieInfo = localStorage.getItem('movieInfo')
    const poster = await fetch (`http://img.omdbapi.com/?apikey=4c277607&localStorage.getItem('movieInfo')`)
    const posterImg = await poster.json();

    console.log(posterImg)
}

main();