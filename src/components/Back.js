import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Back() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://finmavis.github.io/swapi-task')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            {data && (
                <div>
                    <p>{data.openingCrawl}</p>
                    <Link to={`/details/${data.openingCrawl}`}>Go to details page</Link>
                </div>
            )}
        </>
    );
}

export default Back;