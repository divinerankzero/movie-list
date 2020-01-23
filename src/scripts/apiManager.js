const getMovies = () => {
    const movieURL = "http://localhost:8088/movies"
    fetch(movieURL)
        .then(resp => resp.json())
        .then(movies => {
            renderMovies(movies);
        })
    }