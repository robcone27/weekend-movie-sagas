import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';

function MovieList(){

const dispatch = useDispatch();
const movies = useSelector(store => store.movies);
const history = useHistory();

}

export default MovieList;
