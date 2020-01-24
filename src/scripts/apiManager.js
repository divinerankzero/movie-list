const movieURL = "http://localhost:8088/movies"

const getMovies = (URL) => {
    movieContainer.innerHTML = "";
    fetch(URL)
        .then(resp => resp.json())
        .then(movies => {
            movies.forEach(movie => {
                fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${config.apiKey}`)
                    .then(response => response.json())
                    .then(movieDetails => {
                        const rated = movieDetails.Rated;
                        const runtime = movieDetails.Runtime;
                        const genre = movieDetails.Genre;
                        const director = movieDetails.Director
                        
                        movie.rated = rated;
                        movie.runtime = runtime;
                        movie.genre = genre;
                        movie.director = director;

                        renderMovie(movie)
                    })
            })
        })
    }