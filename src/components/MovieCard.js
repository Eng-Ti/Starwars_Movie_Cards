import React from 'react'
import '../styles/MovieCard.css'

const MovieCard = ({ title, releaseDate, openingCrawl }) => {
    return (

        <div className="card">
            <h2>{title}</h2>
            <p id='date'>{releaseDate}</p>
            <p id='opening'>{openingCrawl}</p>
            <hr></hr>
            <p><a href='#'>More Info</a></p>


        </div>
    );
};

export default MovieCard;