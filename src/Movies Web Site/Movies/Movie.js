import axios from "axios"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import SubsWatched from "./SubsWatched"


function MovieComp(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const { oneMovie } = location.state ? location.state : ""
    let movie = {}

    if (oneMovie) {
        movie = { ...oneMovie }
    } else {
        movie = { ...props.movie }
    }


    async function deleteMovie() {
        await axios.delete("http://localhost:3050/movies/" + movie._id)
        alert("movie deleted")
        navigate(-1)
    }


    function edit() {
        navigate(-1)
        dispatch({ type: "EDIT", payload: props.movie })
    }


    return <div style={{ "border": "4px solid red" }}  >
        <Outlet />

        <b>{movie.Name}</b><br />
        {movie.YearPremiered}<br />
         <img src={movie.ImageUrl} width="300px" height="300px" float="right " position="right"></img><br />
        Genres:{`"${movie.Genres[0]}", "${movie.Genres[1]}", "${movie.Genres[2]}"`}
        {<SubsWatched movie={movie._id} float="left" position="right"/>} 

        <button onClick={edit}>Edit</button>
        <button onClick={deleteMovie}>Delete</button>
    </div>
}
export default MovieComp
