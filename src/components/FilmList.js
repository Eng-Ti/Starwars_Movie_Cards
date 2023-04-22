import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const FilmList = () => {

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState(null);

    const [error, setError] = useState();

    useEffect(() => {
        fetch(`https://swapi.dev/api/films`)
            .then((response) => {
                if (!response.ok) {
                    alert(`This is an HTTP Error: The status is ${response.status}`)
                    throw new Error(`This is an HTTP Error: The status is ${response.status}`)
                }
                return response.json()
            })

            .then((actualData) => {
                setData(actualData.results)
                setError(null)
            })
            .catch((error) => {
                console.log(error)
                setError(error)
                setData(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    return (
        <div>
            <div>
                {loading && <div> Data loading...</div>}
                {error && <div>{`Problem fetching data - ${error}`}</div>}

                {data && data.map((item) => {

                    return (
                        <div className='movie_card'>

                            <MovieCard
                                key={item.episode_id}
                                title={item.title}
                                releaseDate={item.release_date}
                                openingCrawl={item.opening_crawl}
                            />

                        </div>)
                })}

            </div>

        </div>
    )
}


export default FilmList