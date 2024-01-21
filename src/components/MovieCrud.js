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
      <h2>Movie List</h2>
      <MovieForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={editing ? () => handleUpdate(editingMovie.movie_id) : handleCreate}
        buttonText={editing ? 'Update Movie' : 'Create Movie'}
      />
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.movie_id}>
              <span>{movie.title}</span>
              <button onClick={() => handleEdit(movie)}>Edit</button>
              <button onClick={() => handleDelete(movie.movie_id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCrud;
