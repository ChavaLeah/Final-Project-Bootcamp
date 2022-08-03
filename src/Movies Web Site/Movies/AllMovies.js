import axios from "axios"
import { useEffect, useState } from "react"
import MovieComp from "./Movie"
import { useSelector } from "react-redux"

function AllMovies() {

    const storeData = useSelector(state => false)
    const [movies, setMovies] = useState([])


    useEffect(() => {
        getAllMovies()
    }, [movies])

    async function getAllMovies() {
        let { data } = await axios.get("http://localhost:3050/movies")
        setMovies(data)
    }


    return <div>
        {
            storeData ? null :
                movies.map((movie, index) => {
                    return <div key={index}><MovieComp movie={movie}/> </div>
                })
        }

    </div>


}
export default AllMovies