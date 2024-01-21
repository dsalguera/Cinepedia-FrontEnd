import React, { useState, useEffect } from 'react';
const api_url = "https://cinepedia-dsrv.onrender.com/api/movies";

const MovieTable = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api_url); // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
        <div className="">
          <input type="text" className=""/>
          <button className="">Search</button>
        </div>

        <div className="">
        {movieData ? (
          movieData.results.map((movie) => (

            <div className="" key={movie.movie_id} >
              <img className="" width="48px" height="72px" src={movie.cover_img} alt={movie.title} />
              <div>
                <div>{movie.title}</div>
                <p>{movie.sinopsis}</p>
              </div>
              <div>
                <span>
                  Director: {movie.director}
                </span>
                <span>
                  Rating: {movie.rating}
                </span>
              </div>
            </div>

          ))
        ) : (
          <p>Loading...</p>
        )}
        </div>
    </div>
    
  );
};

export default MovieTable;
