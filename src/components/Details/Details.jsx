import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './Details.css';

function Details() {
    const movieDetails = useSelector(store => store.specificMovie)
    const movieGenres = useSelector(store => store.genres)
    const history = useHistory()
    const backToHome = () => {
        history.push('/')
    }

    return (
        <>
            <div className="pGenre">
                <button onClick={backToHome}>back</button>
            </div>

            <img src={movieDetails.poster}></img>
            <h1>{movieDetails.title}</h1>
            <h4>{movieDetails.description}</h4>
            <h3>Genres:</h3>

            <div>
                {movieGenres.map(genre => (
                    <h5>{genre.name}</h5>
                ))}
            </div>
        </>
    );
}

export default Details;