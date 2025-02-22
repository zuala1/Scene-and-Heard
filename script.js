function searchMovie() {

  const searchTerm = document.getElementById("movieSearch").value;

  const searchResults = document.getElementById("searchResults");

  searchResults.innerHTML = "";

  const movies = {

    "movie1": { title: "Interstellar", url:" page2.html" },

    "movie2": { title: "Spider-man:Into the Spider-verse", url:"page3.html"  }

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
