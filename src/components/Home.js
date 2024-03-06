// Home.js

import React from 'react';
import MovieCard from './MovieCard';

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
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-16 h-screen">
          <h1 className="text-4xl font-bold mb-4">Cinepedia</h1>
          <p className="text-lg">The place where you can stream and watch your favorite series and movies.</p>
          {/* Add other content or components for the hero section */}
        </div>

        <div>
          <h1>The best shows and series in one one click</h1>
        </div>

        {/* Movies */}

        <div className="flex flex-wrap -mx-0">
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl-1/4 px-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://placekitten.com/300/200" alt="Card Image" className="mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">Card 1</h2>
            <p className="text-gray-700">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">Learn More</button>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl-1/4 px-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://placekitten.com/300/200" alt="Card Image" className="mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">Card 1</h2>
            <p className="text-gray-700">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">Learn More</button>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl-1/4 px-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://placekitten.com/300/200" alt="Card Image" className="mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">Card 1</h2>
            <p className="text-gray-700">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">Learn More</button>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl-1/4 px-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://placekitten.com/300/200" alt="Card Image" className="mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">Card 1</h2>
            <p className="text-gray-700">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">Learn More</button>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl-1/4 px-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://placekitten.com/300/200" alt="Card Image" className="mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">Card 1</h2>
            <p className="text-gray-700">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">Learn More</button>
          </div>
        </div>
        

      </div>



        <div className="bg-slate-200 h-auto text-center py-16">
           <h3>Can't find a Movie or a Serie? Send Us a Message!</h3><br/><br/>
           <input type="text" placeholder="Your email here"/><br/><br/>
           <textarea placeholder="Description"></textarea>
        </div>

        {/* Footer Code */}
        <footer className="text-center text-white py-5">
          <h3 className="mt-5">Cinepedia. All rights reserved TM 2024.</h3><br/><br/>
        </footer>
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
