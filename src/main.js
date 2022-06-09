const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: "f3e43c9e4e82d85a24170e837345bbec",
  },
});

async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");
  console.log(data);
  const movies = data.results;

  movies.forEach((movie) => {
    const previewTrendingMovieContainer = document.querySelector(
      "#trendingPreview .trendingPreview-movieList"
    );

    const trendingMovieContainer = document.createElement("div");
    trendingMovieContainer.classList.add("movie-container");

    const trendingImg = document.createElement("img");
    trendingImg.classList.add("movie-img");
    trendingImg.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    );
    trendingImg.setAttribute("alt", movie.title);

    trendingMovieContainer.appendChild(trendingImg);
    previewTrendingMovieContainer.appendChild(trendingMovieContainer);
  });
}

async function getCategoriesPreview() {
  const { data } = await api("/genre/movie/list");
  console.log(data);
  const categories = data.genres;

  categories.forEach((category) => {
    const previewCategoriesContainer = document.querySelector(
      "#categoriesPreview .categoriesPreview-list"
    );

    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", "id" + category.id);
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    previewCategoriesContainer.appendChild(categoryContainer);
  });
}
