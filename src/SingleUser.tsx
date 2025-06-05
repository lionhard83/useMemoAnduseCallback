import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const SingleUser = () => {

    const params = useParams();

    const [user, setUser] = useState<{name: string; id: number, username: string, email: string} | null>(null)
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => setUser(response.data))
    }, [params.id])

    console.log(params);
    return <p>{user?.username}</p>
}