import { useSelector } from "react-redux"
import axios from "axios"
import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import MovieComp from "./Movie"
import EditMovie from "./EditMovie"


function Moviesomp() {

    const navigate = useNavigate()
    const storeData = useSelector(state => state)
    const [name, setName] = useState()
    const [movie, setMovie] = useState()

    async function findMovie() {
        let { data } = await axios.get(`http://localhost:3050/movies/${name}`)
        if (!data) {
            alert("check if  Movie steel exist in DB")
        }
        setMovie(data)
    }

    return <div style={{ border: "5px solid black", width:"100%" }}>
        <h2>Movies</h2>
        <br></br>
        <button onClick={() => navigate('allMovies')} hidden={storeData[0]}>All Movies</button>
        <button onClick={() => navigate('addMovie')} hidden={storeData[0]}>Add Movie</button>
        <span hidden={storeData[0]}>Find Movie: </span><input type="text" onChange={e => setName(e.target.value)} hidden={storeData[0]}></input>
        <button onClick={findMovie} hidden={storeData[0]}>Find</button>
        {
            movie && <MovieComp movie={movie} />
        }

        {
            storeData[0] != true || storeData[0] == "undefined" ? null : <EditMovie />
        }

        <Outlet />

    </div>
}
export default Moviesomp