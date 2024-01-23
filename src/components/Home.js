// Home.js

import React from 'react';
import MovieCard from './MovieCard';

import Hero from './Hero';
import Gallery from './Gallery';

const Home = () => {

  const movies = [
    
    {
      title: "Jojo's: Bizarre Adventures",
      imageSrc: "https://m.media-amazon.com/images/I/81IF6cvmg8L.jpg",
      description: "Season 1",
    },
    {
      title: "Jojo's: Bizarre Adventures",
      imageSrc: "https://jjba-store.com/cdn/shop/products/product-image-1326646837_a371fd99-503a-4bce-8f16-7e7e68cf261e_452x.jpg?v=1610545073",
      description: "Season 4",
    },
    {
      title: "Jojo's: Bizarre Adventures",
      imageSrc: "https://i.ebayimg.com/images/g/WEgAAOSwUYph5Tt1/s-l1200.webp",
      description: "Season 3",
    },
    {
      title: "Jojo's: Bizarre Adventures",
      imageSrc: "https://m.media-amazon.com/images/I/71NbPUu-lWL.jpg",
      description: "Season 5",
    },
    {
      title: "Naruto",
      imageSrc: "https://i.ebayimg.com/images/g/WEgAAOSwUYph5Tt1/s-l1200.webp",
      description: "Season 1"
    },
    {
      title: "Attack on Titan",
      imageSrc: "https://i.ebayimg.com/images/g/WEgAAOSwUYph5Tt1/s-l1200.webp",
      description: "Season 3"
    },
    {
      title: "One Piece",
      imageSrc: "https://i.ebayimg.com/images/g/WEgAAOSwUYph5Tt1/s-l1200.webp",
      description: "Season 2"
    },
    {
      title: "My Hero Academia",
      imageSrc: "https://i.ebayimg.com/images/g/WEgAAOSwUYph5Tt1/s-l1200.webp",
      description: "Season 4"
    },
    {
      title: "Demon Slayer",
      imageSrc: "https://i.ebayimg.com/images/g/WEgAAOSwUYph5Tt1/s-l1200.webp",
      description: "Season 1"
    }
  ];

  return ( 
    <div>
        <Hero/>
        <Gallery/>
    </div>
  );

  /* 
  <div className="wrapper">

          <div className="">
            <h3 className="">All your movies and series, in one place.</h3>
          </div>
          
          <div className="">
            {movies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>

          <div className="">
            <button className="">Show all series</button>
          </div>

      </div>
  */
}

export default Home;
