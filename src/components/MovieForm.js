import React from 'react';

const MovieForm = ({ formData, handleChange, handleSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Genre:
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
      </label>
      <label>
        Year Released:
        <input type="text" name="year_released" value={formData.year_released} onChange={handleChange} />
      </label>
      <label>
        Sinopsis:
        <textarea name="sinopsis" value={formData.sinopsis} onChange={handleChange}></textarea>
      </label>
      <label>
        Director:
        <input type="text" name="director" value={formData.director} onChange={handleChange} />
      </label>
      <label>
        Casting:
        <input type="text" name="casting" value={formData.casting} onChange={handleChange} />
      </label>
      <label>
        Rating:
        <input type="text" name="rating" value={formData.rating} onChange={handleChange} />
      </label>
      <label>
        Cover Image:
        <input type="text" name="cover_img" value={formData.cover_img} onChange={handleChange} />
      </label>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default MovieForm;
