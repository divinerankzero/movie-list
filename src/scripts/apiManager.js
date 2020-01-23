const movieURL = "http://localhost:8088/movies"

const getMovies = (URL) => {
    movieContainer.innerHTML = "";
    fetch(URL)
        .then(resp => resp.json())
        .then(movies => {
            renderMovies(movies);
        })
    }