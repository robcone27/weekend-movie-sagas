import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MovieItem from '../MovieItem/MovieItem';
// import './MovieList.css';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //Set history to change pages.
    const history = useHistory();

    const toAddMoviePage = () => {
        history.push('/add')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            
            
            </section>
        </main>

    );
}

export default MovieList;
