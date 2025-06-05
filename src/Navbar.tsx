import { Link, useLocation } from "react-router-dom"



export const Navbar = () => {
    const {pathname, search} = useLocation();
    console.log(search);
    return <>
        <Link to={'/users'} style={{fontWeight: pathname.includes('/users') ? 'bold' : 'normal' }} >users</Link>
        <br/>
        <Link to={'/characters'} style={{fontWeight: pathname.includes('/characters') ? 'bold' : 'normal' }} >characters</Link>
        <br/>
        <br/>
    </>
}