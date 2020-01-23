const movieContainer = document.querySelector("#movieContainer");

const renderMovies = (movies) => {
    movies.forEach(movie => {
        movieContainer.innerHTML += movieFactory(movie);
    })
}

const movieFactory = (movie) => {
    return `
    <article class="movie">
        <p> <strong>Movie Title:</strong> ${movie.title} </p>
        <p> <strong>Date:</strong> ${movie.releaseDate} </p>
    </article>
    `;
}
