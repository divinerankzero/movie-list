// Removed this, as the buttons trigger it:
// getMovies(movieURL);

// Search Bar & Buttons
const showallButton = document.querySelector("#showall-button");
const searchButton = document.querySelector("#search-button");
const searchBar = document.querySelector("#search-bar");

searchButton.addEventListener("click", event => {
    const search = searchBar.value;
    getMovies(`http://localhost:8088/movies?q=${search}`);
})

showallButton.addEventListener("click", event => {
    getMovies(movieURL);
})