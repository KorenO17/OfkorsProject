import { useEffect } from 'react';
import { Link, useNavigate , Outlet } from 'react-router-dom';
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
            <li><Link to="/UserPage/albums">My Albums</Link></li>
            <li><Link to="/UserPage/posts">My Posts</Link></li>
            <li><Link to="/UserPage/todos">My Todos</Link></li>
            <li><Link to="/UserPage/info">My Info</Link></li>
        </ul>
            <Outlet/>
        <Link to="/" onClick={() => localStorage.clear()}>Log Out</Link>
    
    </div>)
}

export default UserPage