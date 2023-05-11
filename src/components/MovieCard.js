import React from 'react'
import '../styles/MovieCard.css'
import MovieDetails from '../components/MovieDetails';
import { Link } from 'react-router-dom'

const MovieCard = ({ title, releaseDate, openingCrawl }) => {
    return (

        <div className="card">
            <h2>{title}</h2>
            <p id='date'>{releaseDate}</p>
            <p id='opening'>{openingCrawl}</p>
            <hr></hr>

            <div>
                <ul>
                    <li><Link to="/MovieDetails">More Info</Link></li>
                </ul>

            </div>


        </div>
    );
};

export default MovieCard;