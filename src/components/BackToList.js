import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home'
import NotFound from '../src/components/NotFound';
import MovieCard from '../src/components/MovieCard';
import MovieDetails from '../src/components/MovieDetails';
import React, { useState, useEffect } from 'react'


const App = () => {


    const [data, setData] = useState(null);



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
            })
    }, []);


    return (

        <>

            <nav>

                <Link to='/MovieCard'> MovieCard </Link>


            </nav>

            <Routes>


                <Route exact path="/movie/:id" element={<MovieDetails />} />


                <Route path='/' element={<Home />} />

                <Route path='*' element={<NotFound />} />

                {/* <Route path='/back' element={<Back />} /> */}

                {
                    data && data.map((item) => {

                        return (

                            <Route
                                key={item.opening_crawl}
                                path={`/${item.opening_crawl}`}
                                element={<MovieCard />}
                            />

                        )
                    })
                }


            </Routes>
        </>

    )
}


export default App


