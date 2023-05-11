
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, [id]);


    const goBack = () => {
        window.history.back();
    };

    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);


    useEffect(() => {
        const getDetails = (StyledMovieInfoListst, setter) => {
            Promise.all(
                StyledMovieInfoListst.map((url) => axios.get(url).then((response) => response.data.name))
            ).then(setter);
        };

        if (movie) {
            getDetails(movie.characters, setCharacters);
            getDetails(movie.planets, setPlanets);
            getDetails(movie.starships, setStarships);
            getDetails(movie.vehicles, setVehicles);
            // getDetails(movie.species, setSpecies);
        }
    }, [movie]);

    return (
        <>
            {!movie && loading && <div>Loading</div>}
            {movie && (
                <div>
                    <div className='backtolist'>
                        <div onClick={goBack}>← Back to list</div>
                        <div>{movie.title}</div>
                        <div>Director: {movie.director}</div>
                        <div>Producer: {movie.producer}</div>
                    </div>

                    <div className='description'>
                        <div>Description</div>
                        <div>{movie.opening_crawl}</div>
                    </div>

                    <MovieDet heading="Characters" items={characters} />
                    <MovieDet heading="Planets" items={planets} />
                    <MovieDet heading="Starships" items={starships} />
                    <MovieDet heading="Vehicles" items={vehicles} />

                </div>
            )}
        </>
    );
};
const MovieDet = ({ heading, items }) => {
    <div>
        <h2>{heading}</h2>
        <div className='info'>
            {items.map((name, index) => (
                <p key={index}>{name}</p>
            ))}
        </div>
    </div>
};

export default MovieDetails