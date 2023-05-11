
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieCard from './components/MovieCard';
import Back from './components/Back';


const StarWarsApp = () => {
  return (
    <>


      <Routes>

        <Route path='/' element={<Home />} />

        <Route exact path="/" element={<MovieCard />} />
        <Route exact path="/movie/:id" element={<Back />} />

      </Routes>
    </>

  );
};

export default StarWarsApp;