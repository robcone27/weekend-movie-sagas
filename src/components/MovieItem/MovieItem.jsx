import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { BsArrowRightShort, BsTrashFill } from "react-icons/bs";
// import Paper from '@material-ui/core/Paper';
// import './MovieItem.css';
function MovieItem({ movie }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const toDetailsPage = () => {
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
        history.push('/details')
    }

    const removeTitle = () => {
        dispatch({ type: 'REMOVE_TITLE', payload: movie });
    }

    return (
        <div key={movie.id} className="item">
            <h3 className="title">{movie.title}</h3>
            <div className="poster">
                <img onClick={toDetailsPage} src={movie.poster} alt={movie.title} />
            </div>
        </div>
    );
}


export default MovieItem;