import { useEffect } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useUser } from '../userContexts/userContext';

function UserPage() {
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
        if (JSON.parse(localStorage.getItem("user")) === undefined) {
            navigate("/Error")
        }
    }, [])

    return (<div>
        <header id="webHeader">
        <div id='logo'>
        <img src='https://seeklogo.com/images/M/monkey-logo-F30F974B08-seeklogo.com.png' alt=""/> 
        </div>  
        <div id='title'>
        <h1 >Welcome Back {user.username}!</h1>
        </div>
        </header>
        <nav>
            <div><Link to="/UserPage/Albums">My Albums</Link></div>
            <div><Link to="/UserPage/posts">My Posts</Link></div>
            <div><Link to="/UserPage/todos">My Todos</Link></div>
            <div><Link to="/UserPage/info">My Info</Link></div>
            <div id='logOut'><Link to="/" onClick={() => localStorage.clear()}>Log Out</Link></div>
        </nav>
            <Outlet/>
    
    </div>)
}

export default UserPage