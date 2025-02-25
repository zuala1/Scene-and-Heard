function searchMovie() {
      const searchTerm = document.getElementById('movieSearch').value.toLowerCase();
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = '';

      // Sample movie data (replace with your actual data source)
      const movies = [
        { title: "Interstellar", link: "page2.html" },
        
        { title: "The Dark Knight", link: "page7.html" },
        { title: "3 Idiots", link: " page4.html" },
        { title: "Spider-man:Into the Spider-verse", link: "page3.html" },
    
        { title: "The Shawshank Redemption", link: "page6.html" },
        
        
        { title: "Kabhi Khushi Kabhie Gham", link: "page5.html" }
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
