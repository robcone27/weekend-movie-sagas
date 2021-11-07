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


    


}

export default AddMovie;