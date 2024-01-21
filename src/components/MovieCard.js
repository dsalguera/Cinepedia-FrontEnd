// MovieCard.js

import React from 'react';

const MovieCard = ({ title, imageSrc, description }) => {
  return (
    <div className="">
      
      <div className="">
        <img className="" src={imageSrc} alt={title} />
      </div>
      
      <div className="">
        <div className="">{title}</div>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;

