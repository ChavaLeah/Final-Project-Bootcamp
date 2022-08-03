import { useState, useEffect } from "react"
import axios from "axios"
import MemberComp from "./Member"

function AllMembers() {

    const [members, setMembers] = useState([])

    useEffect(() => {
        getAllMembers()
    }, [members])

    async function getAllMembers() {
        let { data } = await axios.get("http://localhost:3050/members")
        if (data.length == 0) alert("There are no Members in the DB")
        setMembers(data)
    }

    return <div>
        {
            members.map((member, index) => {
                return <div key={index}>< MemberComp member={member} /> </div>
            })
        }
    </div>
}
export default AllMembers