import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    
    const history = useHistory();

    const toAddMoviePage = () => {
        history.push('/add')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            
            <div className="top">
                <div className="add-movie">
                    <Button variant="contained" className="addMovie" onClick={toAddMoviePage}>Add a Movie</Button>
                </div>
            </div>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem
                            movie={movie} />
                    );
                })}
            </section>
        </main>

    );
    
    }

export default MovieList;
