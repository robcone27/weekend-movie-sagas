import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
import './AddMovie.css';
import { $CombinedState } from 'redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function AddMovie() {

    //Data to be sent to Sagas.
    const [movie, setMovie] = useState({});
    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

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
            <div className="addMovie">

                <h2 className="title">Add A Movie</h2>

                <form onSubmit={handleSubmit} className="add-movie-form">
                    <input
                        className="title-input"
                        variant="outlined"
                        id={"title"}
                        required
                        placeholder="Title"
                        value={movie.titles}
                        onChange={setMovieInput}
                    />

                    <input
                        className="description"
                        variant="outlined"
                        id={"description"}
                        required
                        placeholder="Description"
                        value={movie.description}
                        onChange={setMovieInput}
                    />
                    <input
                        variant="outlined"
                        required
                        id={"poster"}
                        required
                        placeholder="Poster"
                        value={movie.poster}
                        onChange={setMovieInput}
                    />
                    <select selected value={movie.genre} onChange={setGenre}>
                        <option>Select Genre</option>
                        <option value={1}>Adventure</option>
                        <option value={2}>Animated</option>
                        <option value={3}>Biographical</option>
                        <option value={4}>Comedy</option>
                        <option value={5}>Disaster</option>
                        <option value={6}>Drama</option>
                        <option value={7}>Epic</option>
                        <option value={8}>Fantasy</option>
                        <option value={9}>Musical</option>
                        <option value={10}>Romantic</option>
                        <option value={11}>Science Fiction</option>
                        <option value={12}>Space-Opera</option>
                        <option value={13}>Superhero</option>
                    </select>
                    <input type="submit" value="submit" />
                </form>
                <button onClick={backToHome}>Cancel</button>
            </div>
        </>
    );




}

export default AddMovie;