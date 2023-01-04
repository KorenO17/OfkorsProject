import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useUser } from '../userContexts/userContext';

function UserPage() {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
        if (JSON.parse(localStorage.getItem("user")) == undefined) {
            navigate("/dsaaaaaaaaaaaaaaaaaaaaaaaa")
        }
    }, [])

    return (<div>
        <h1>Welcome Back {user.username}!</h1>
        <ul>
            <li> <Link to="/UserPage/albums">My Albums</Link></li>
            <li> <Link to="/UserPage/posts">My Posts</Link></li>
            <li> <Link to="/UserPage/todos">My Todos</Link></li>
        </ul>
        <Link to="/" onClick={() => localStorage.clear()}>Log Out</Link>
        <Outlet />
    </div>)
}

export default UserPage