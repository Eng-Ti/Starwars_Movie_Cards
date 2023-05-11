
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from '../src/components/MovieDetails'
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <>
      {/* <MovieDetails /> */}

      <nav>
        <Link to='/'> Home </Link>
      </nav>

      <Routes>

        <Route exact path='/' element={<Home />} />

        <Route exact path="/MovieDetails" element={<MovieDetails />} />

      </Routes>
    </>

  );
};

export default App;