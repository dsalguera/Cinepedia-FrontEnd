// MovieCard.js

import React from 'react';

const MovieCard = ({ title, imageSrc, description }) => {
  return (

    <div className="w-1/2 md:w-1/3 lg:w-1/4 xl-1/4 px-4 mb-4">
          <div className="bg-slate-700 p-4 rounded-lg shadow-md">
            <img src={imageSrc} alt="Card Image" className="mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">Watch</button>
          </div>
        </div>


    
  );
};

export default MovieCard;

/*
<div className="">
      
      <div className="">
        <img className="" src={imageSrc} alt={title} />
      </div>
      
      <div className="">
        <div className="">{title}</div>
        <p className="">{description}</p>
      </div>
    </div>

*/

