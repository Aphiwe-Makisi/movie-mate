// http://www.omdbapi.com/?i=tt3896198&apikey=b4d9a307

let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// function to fetch data from API
const getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  // if input field is empty
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">
                                Please enter a movie name.
                            </h3>`;
  }
  // if input field is not empty
  else {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response == "True") {
          result.innerHTML = `<div class="info">
                                    <div class="top-section">
                                      <img src=${data.Poster} class="poster"/>
                                      
                                        <div class="details-wrapper">
                                            <h2>${data.Title}</h2>
                                            <div class="rating">
                                              <img src="star.svg"/>
                                              <h4>${data.imdbRating}</h4>
                                            </div>
                                            <div class="details">
                                            <span>${data.Rated}</span>
                                            <span>${data.Year}</span>
                                            <span>${data.Runtime}</span>
                                        </div>
                                        <div class="genre">
                                              <div>${data.Genre.split(',').join('</div><div>')}</div>
                                        </div>
                                        </div>
                                    </div>
                                    <h3>Plot:</h3>
                                    <p>${data.Plot}</p>
                                    <h3>Actors:</h3>
                                    <p>${data.Actors}</p>
                                </div>`;
        }
        // if movie does not exist
        else {
          result.innerHTML = `<h3 class="msg">
                                    ${data.Error}
                                </h3>`;
        }
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};

searchBtn.onclick = () => {
  getMovie();
};
