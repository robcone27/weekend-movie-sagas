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

    const setGenre = (event) => {
        setMovie({
            ...movie,
            genre_id: event.target.value
        })
    }

    return (
        <>
            <h2>Add A Movie</h2>
            {/* //form will go here */}
            <TextField
                className="title-input"
                variant="outlined"
                id={"title"}
                required
                placeholder="Title"
                value={movie.titles}
                onChange={setMovieInput}
            />
        </>
    );




}

export default AddMovie;