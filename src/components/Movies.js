import React, { useState, useEffect } from 'react';

const MovieTable = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cinepedia-dsrv.onrender.com/api/movies');
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  /* <p className="text-gray-600 line-clamp-3">{movie.sinopsis}</p> */

  return (
    <div>
      <div className="">
        <input type="text" className="" />
        <button className="">Search</button>
      </div>



      <div className="container mx-auto mt-4">
        <div className="flex flex-wrap -mx-0">
        {movieData && movieData.results ? (
          movieData.results.map((movie) => (

            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-4 mb-4" key={movie.movie_id}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={movie.cover_img} alt={movie.title} className="mb-4 rounded object-cover w-40 h-60 md:h-68 lg:h-76" />
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{movie.title}</h2>
                
                <p className="text-gray-600">Director: {movie.director}</p>
                <p className="text-gray-600">Rating: {movie.rating}</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full text-sm md:text-base">Watch</button>
              </div>
            </div>

          ))
        ) : (
          <p>Loading...</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default MovieTable;

