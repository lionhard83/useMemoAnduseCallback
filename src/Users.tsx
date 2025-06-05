import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export const Users = () => {
    const [users, setUsers] = useState<{name: string; id: number, username: string, email: string}[]>([])
    
    useEffect(() => {
        console.log("viene chiamata?")
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
    }, [])

    return (<>
        <ul>{users.map(item => <li>{item.username}<Link to={String(item.id)}>Go To Link</Link></li>)}</ul>
    </>)
}