const movieContainer = document.querySelector("#movieContainer");

const renderMovie = (movie) => {
    movieContainer.innerHTML += movieFactory(movie);
}

const movieFactory = (movie) => {
    return `
    <article class="movie">
        <p><strong>Movie Title:</strong> ${movie.title} </p>
        <p><strong>Date:</strong> ${movie.releaseDate} </p>
        <p><strong>Rating:</strong> ${movie.rated}</p>
        <p><strong>Runtime:</strong> ${movie.runtime}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
    </article>
    `;
}