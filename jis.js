const apiURL = "https://api.themoviedb.org/3/discover/movie?api_key=62ae2dd89d09c43a1904f92b98e5265f&sort_by=popularity.desc";
const searchJudul = "https://api.themoviedb.org/3/search/movie?api_key=62ae2dd89d09c43a1904f92b98e5265f&query=${search_key}&page=1";

const main = document.getElementById("container");
const search = document.getElementById("search");

getFilm(apiURL);

function getFilm(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      listFilm(data.results);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm) {
    getFilm(searchJudul + "&query=" + searchTerm);
  } else {
    getFilm(apiURL);
  }
});

function listFilm(data) {
  main.innerHTML = "";
  data.forEach((film) => {
    const { title, poster_path, release_date, vote_average } = film;
    const movieList = document.createElement("div");
    movieList.innerHTML = `
    <div class="card">
    <img src="${"https://image.tmdb.org/t/p/w500" + poster_path}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div> `;

    main.appendChild(movieList);
  });
}

function formatDate(release_date) {
  return new Date(release_date).toLocaleDateString("default", { day: "2-digit", month: "short", year: "numeric" });
}
