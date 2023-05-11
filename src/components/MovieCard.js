import React from 'react'
import '../styles/MovieCard.css'
import Back from '../components/Back';

const MovieCard = ({ title, releaseDate, openingCrawl }) => {
    return (

        <div className="card">
            <h2>{title}</h2>
            <p id='date'>{releaseDate}</p>
            <p id='opening'>{openingCrawl}</p>
            <hr></hr>
            <div><a href='<Back/>'>More Info</a></div>


        </div>
    );
};

export default MovieCard;