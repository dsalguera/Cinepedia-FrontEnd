import React from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//
//import About from './components/About';
//import Contact from './components/Contact';

import Home from './components/Home';
import Movies from './components/Movies';
import MovieCrud from './components/MovieCrud';
import NavCinepedia from './components/NavCinepedia';

import './App.css';

//<Route path="/" element={<Home />} />

function App() {
  return (
    <div>
    <Router >
      
        <NavCinepedia/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/manage" element={<MovieCrud />} />
        </Routes>
      
    </Router>
    </div>
    
  ); 
}

export default App;
