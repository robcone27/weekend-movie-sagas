import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";


function Details(){
// const id = useSelector((store) = store.MovieID);
const history = useHistory();

useEffect(() => {
  dispatchEvent({ type: GET_DETAILS, payload: id})
    })




return(
    <div>
        <h2>Movie Details</h2>
    </div>
);
}

export default Details;