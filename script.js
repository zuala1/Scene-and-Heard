function searchMovie() {
      const searchTerm = document.getElementById('movieSearch').value.toLowerCase();
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = '';

      // Sample movie data (replace with your actual data source)
      const movies = [
        { title: "Interstellar", link: "https://codepen.io/Lal-Thazuala/pen/jEOqMdo" },
        
        { title: "The Dark Knight", link: "https://codepen.io/Lal-Thazuala/pen/mydrrOP" },
        { title: "3 Idiots", link: "https://codepen.io/Lal-Thazuala/pen/XJWKoyv" },
        { title: "Spider-man:Into the Spider-verse", link: "https://codepen.io/Lal-Thazuala/pen/EaxKQYg" },
    
        { title: "The Shawshank Redemption", link: "https://codepen.io/Lal-Thazuala/pen/RNwGGGW" },
        
        
        { title: "Kabhi Khushi Kabhie Gham", link: "https://codepen.io/Lal-Thazuala/pen/gbOwMNa" }
      ];

      const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
      );

      if (filteredMovies.length === 0) {
        searchResults.innerHTML = "<li>No movies found.</li>";
      } else {
        const ul = document.createElement('ul');
        filteredMovies.forEach(movie => {
          const li = document.createElement('li');
          const a = document.createElement('a'); // Create a link element
          a.href = movie.link; // Set the link
          a.textContent = movie.title;
          li.appendChild(a);
          ul.appendChild(li);
        });
        searchResults.appendChild(ul);
      }
    }
