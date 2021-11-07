import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
// import './AddMovie.css';
import { $CombinedState } from 'redux';

function AddMovie() {

    //Data to be sent to Sagas.
    const [movie, setMovie] = useState('');


    const dispatch = useDispatch();

    const history = useHistory();

    //this will add the title, description and poster
    const setMovieInput = (event) => {
        switch (event.target.id) {
            case 'title':
                setMovie({ ...movie, title: event.target.value })
                break;
            case 'description':
                setMovie({ ...movie, description: event.target.value })
                break;
            case 'poster':
                setMovie({ ...movie, poster: event.target.value })
                break;
        }
    }

    const backToHome = () => {
        history.push('/')
    }

    const setGenre = (event) => {
        setMovie({
            ...movie,
            genre_id: event.target.value
        })
    }


    const handleSubmit = event => {
        event.preventDefault();
        alert('Movie Added')
        dispatch({
            type: 'ADD_MOVIE',
            payload: movie
        })
    }


    return (
        <>
            <h2>Add A Movie</h2>
            <form onSubmit={handleSubmit} className="add-movie-form">
                <TextField
                    className="title-input"
                    variant="outlined"
                    id={"title"}
                    required
                    placeholder="Title"
                    value={movie.titles}
                    onChange={setMovieInput}
                />

                <TextField
                    className="description"
                    variant="outlined"
                    id={"description"}
                    required
                    placeholder="Description"
                    value={movie.description}
                    onChange={setMovieInput}
                />
                <TextField
                    variant="outlined"
                    required
                    id={"poster"}
                    required
                    placeholder="Poster"
                    value={movie.poster}
                    onChange={setMovieInput}
                />
                <select selected value={movie.genre} onChanges={setGenre}>
                    </select>
                <input type="submit" value="submit" />
            </form>
            <button onClick={backToHome}>Cancel</button>
        </>
    );




}

export default AddMovie;