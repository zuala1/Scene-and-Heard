function searchMovie() {

  const searchTerm = document.getElementById("movieSearch").value;

  const searchResults = document.getElementById("searchResults");

  searchResults.innerHTML = "";

  const movies = {

    "movie1": { title: "Interstellar", url:"https://codepen.io/Lal-Thazuala/pen/jEOqMdo " },

    "movie2": { title: "Spider-man:Into the Spider-verse", url:"https://codepen.io/Lal-Thazuala/pen/EaxKQYg"  }

  };

  for (const movieKey in movies) {

    const movie = movies[movieKey];

    if (searchTerm === movie.title) { // Exact match for testing

      const link = document.createElement("a");

      link.href = movie.url;

      link.textContent = movie.title;

      searchResults.appendChild(link);

    }

  }

}