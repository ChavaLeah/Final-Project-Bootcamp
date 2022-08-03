import axios from "axios"
import { useNavigate ,useLocation} from "react-router-dom"
import MoviesWatches from "./MoviesWatches"
import { useDispatch } from "react-redux"


function MemberComp(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { oneMember } = location.state ? location.state : ""
    let member = {}

    if (oneMember) {
        member = { ...oneMember }
    } else {
        member = { ...props.member }
    }

    function edit() {
        navigate(-1)
        dispatch({ type: "EDIT", payload: props.member })
    }

    async function deleteMember() {
        await axios.delete(`http://localhost:3050/sub/${props.member._id}`)
        await axios.delete(`http://localhost:3050/members/${props.member._id}`)
        alert("member deleted also from his subscriptions")

    }

    return <div style={{ "border": "4px solid red" }}  >
        
        <h3>{member.Name}</h3>
        <h3>{member.Email}</h3>
        <h3>{member.City}</h3>

        <button onClick={edit}>Edit</button>
        <button onClick={deleteMember}>Delete</button>
        <MoviesWatches id={member._id} />

    </div>
}
export default MemberComp