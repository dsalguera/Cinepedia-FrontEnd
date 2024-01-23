import React from 'react';

const MovieForm = ({ formData, handleChange, handleSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 text-white">
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full border rounded-md py-2 px-3 mt-1"
        />
      </label>
      <label className="block mb-2">
        Genre:
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="block w-full border rounded-md py-2 px-3 mt-1"
        />
      </label>
      <label className="block mb-2">
        Year Released:
        <input
          type="text"
          name="year_released"
          value={formData.year_released}
          onChange={handleChange}
          className="block w-full border rounded-md py-2 px-3 mt-1"
        />
      </label>
      <label className="block mb-2">
        Sinopsis:
        <textarea
          name="sinopsis"
          value={formData.sinopsis}
          onChange={handleChange}
          className="block w-full border rounded-md py-2 px-3 mt-1"
        ></textarea>
      </label>
      <label className="block mb-2">
        Director:
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
          className="block w-full border rounded-md py-2 px-3 mt-1"
        />
      </label>
      <label className="block mb-2">
        Casting:
        <input
          type="text"
          name="casting"
          value={formData.casting}
          onChange={handleChange}
          className="block w-full border rounded-md py-2 px-3 mt-1"
        />
      </label>
      <label className="block mb-2">
        Rating:
        <input
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="block w-full border rounded-md py-2 px-3 mt-1"
        />
      </label>
      <label className="block mb-2">
        Cover Image:
        <input
          type="text"
          name="cover_img"
          value={formData.cover_img}
          onChange={handleChange}
          className="block w-full border rounded-md py-2 px-3 mt-1"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default MovieForm;

