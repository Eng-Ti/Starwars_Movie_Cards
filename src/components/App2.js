
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderSection from './HeaderSection';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';


const StarWarsApp = () => {
    return (
        <BrowserRouter>
            <HeaderSection />
            <Routes>
                <Route exact path="/" element={<MovieList />} />
                <Route exact path="/movie/:id" element={<MovieDetails />} />

            </Routes>
        </BrowserRouter>
    );
};

export default StarWarsApp;