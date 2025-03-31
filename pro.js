document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

function filterMovies(category) {
  let movies = document.querySelectorAll(".movie-card");
  movies.forEach((movie) => {
    movie.style.display =
      category === "all" || movie.classList.contains(category)
        ? "block"
        : "none";
  });

  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`[onclick="filterMovies('${category}')"]`)
    .classList.add("active");
}
