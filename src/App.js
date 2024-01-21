import React from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//
//import About from './components/About';
//import Contact from './components/Contact';

import Home from './components/Home';
import Movies from './components/Movies';
import MovieCrud from './components/MovieCrud';
import Navbar from './components/Navbar';

import './App.css';

//<Route path="/" element={<Home />} />

function App() {
  return (
    <Router>
      <div className="">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/manage" element={<MovieCrud />} />
        </Routes>
      </div>
    </Router>
    
  ); 
}

export default App;
