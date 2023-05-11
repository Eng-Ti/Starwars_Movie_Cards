import React, { useState, useEffect, formatDate, MAX_CRAWL_LENGTH, bgImages } from 'react';

const MovieList = () => {

    const [movies] = useState([]);

    movies.map((movie, index) => {
        <>
            <div key={movie.episode_id}></div>
            <div style={{ backgroundImage: `url(${bgImages[index]})` }}> </div>

            <div>
                <div className="title">
                    <div href={movie.url}>{movie.title}</div>
                </div>
                <p>{formatDate(movie.release_date)}</p>
            </div>
            <p>{movie.opening_crawl.substring(0, MAX_CRAWL_LENGTH)}...</p>

            <div className="info">
                <p to={`/movie/${movie.episode_id}`}>More info</p>
            </div>


        </>
    })
}
export default MovieList;