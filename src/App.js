import React from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//import Home from './components/Home';
//import About from './components/About';
//import Contact from './components/Contact';

import Movies from './components/Movies';
import MovieCrud from './components/MovieCrud';

import Navbar from './components/Navbar';

import './App.css';

const api_url = "https://cinepedia-dsrv.onrender.com/api/movies";

//<Route path="/" element={<Home />} />

function App() {
  return (
    <Router>
      <div className="">
        <Navbar/>
        <Routes>
          
          <Route path="/movies" element={<Movies />} />
          <Route path="/manage" element={<MovieCrud />} />
        </Routes>
      </div>
    </Router>
    
  ); 
}

export default App;
