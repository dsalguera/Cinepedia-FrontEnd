import React, { useState, useEffect } from 'react';
import MovieForm from './MovieForm';

const MovieCrud = () => {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    year_released: '',
    sinopsis: '',
    director: '',
    casting: '',
    rating: '',
    cover_img: '',
  });

  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://cinepedia-dsrv.onrender.com/api/movies');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched movies:', data);

          if (Array.isArray(data.results)) {
            setMovies(data.results);
          } else {
            console.error('Invalid data format. Expected an array.');
            setMovies([]);
          }
        } else {
          console.error('Failed to fetch movies');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = async () => {
    try {
      const response = await fetch('https://cinepedia-dsrv.onrender.com/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Movie created successfully');
        const updatedMoviesResponse = await fetch('https://cinepedia-dsrv.onrender.com/api/movies');
        if (updatedMoviesResponse.ok) {
          const updatedMoviesData = await updatedMoviesResponse.json();
          setMovies(updatedMoviesData.results || []);
        } else {
          console.error('Failed to fetch updated movies after creation');
        }
        setFormData({
          title: '',
          genre: '',
          year_released: '',
          sinopsis: '',
          director: '',
          casting: '',
          rating: '',
          cover_img: '',
        });
      } else {
        console.error('Failed to create movie');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (movie) => {
    setEditing(true);
    setEditingMovie(movie);
    setFormData({
      title: movie.title,
      genre: movie.genre,
      year_released: movie.year_released,
      sinopsis: movie.sinopsis,
      director: movie.director,
      casting: movie.casting,
      rating: movie.rating,
      cover_img: movie.cover_img,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`https://cinepedia-dsrv.onrender.com/api/movies/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Movie updated successfully');
        const updatedMoviesResponse = await fetch('https://cinepedia-dsrv.onrender.com/api/movies');
        if (updatedMoviesResponse.ok) {
          const updatedMoviesData = await updatedMoviesResponse.json();
          setMovies(updatedMoviesData.results || []);
        } else {
          console.error('Failed to fetch updated movies after editing');
        }
        setEditing(false);
        setEditingMovie(null);
        setFormData({
          title: '',
          genre: '',
          year_released: '',
          sinopsis: '',
          director: '',
          casting: '',
          rating: '',
          cover_img: '',
        });
      } else {
        console.error('Failed to update movie');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://cinepedia-dsrv.onrender.com/api/movies/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Movie deleted successfully');
        const updatedMoviesResponse = await fetch('https://cinepedia-dsrv.onrender.com/api/movies');
        if (updatedMoviesResponse.ok) {
          const updatedMoviesData = await updatedMoviesResponse.json();
          setMovies(updatedMoviesData.results || []);
        } else {
          console.error('Failed to fetch updated movies after deletion');
        }
      } else {
        console.error('Failed to delete movie');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-14">
          <MovieForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={editing ? () => handleUpdate(editingMovie.movie_id) : handleCreate}
            buttonText={editing ? 'Update Movie' : 'Create Movie'}
          />
        </div>
        <div className="md:w-1/2 mt-5 lg:mr-24 lg:my-10">
          {loading ? (
            <p>Loading movies...</p>
          ) : (
            <table className="w-full text-white">
              <thead>
                <tr className="bg-slate-950">
                  <th className="py-2 px-4 border">Title</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie.movie_id} className="hover:bg-slate-800">
                    <td className="py-2 px-4 border">{movie.title}</td>
                    <td className="py-2 px-4 border">
                      <button className="bg-blue-500 text-white py-1 px-3 mx-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" onClick={() => handleEdit(movie)}>Edit</button>
                      <button className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800" onClick={() => handleDelete(movie.movie_id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCrud;
