const movieURL = "http://localhost:8088/movies"

const getMovies = () => {
fetch(movieURL)
    .then(resp => resp.json())
    .then(movies => {
        renderMovies(movies);
    })
}

getMovies();

const movieContainer = document.querySelector("#movieContainer")

const renderMovies = (moviesAry) => {
    moviesAry.forEach(movie => {
        console.log(movie.title)
        movieContainer.innerHTML += movieFactory(movie)
    });
}

const movieFactory = (movie) => {
    return `
    <article class="movie">
        <p> <strong>Movie Title:</strong> ${movie.title} </p>
        <p> <strong>Date:</strong> ${movie.releaseDate} </p>
    </article>
    `
}
