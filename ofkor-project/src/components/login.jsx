
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    window.history.pushState(null, null, '/');
    window.onpopstate = window.history.go(1)

    useEffect(() => {
        localStorage.clear()
    },[])

    async function handleSubmit (e) {
        e.preventDefault()
        let bool = false
        let strUser= await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        let theUser = await strUser.json()
        if(theUser[0].address.zipcode==password){
            bool = true
            localStorage.setItem('user', JSON.stringify(theUser[0]))
        }
        if (bool) {
            navigate('/UserPage')
        }
        else alert("One of the details is wrong")
    }

    const nameChange = (e) => {
        setUsername(e.target.value)
    }

    const passChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label >Enter Username</label>
                <input value={username} onChange={(e) => nameChange(e)} name='username' />
                <br />
                <label >Enter Password</label>
                <input value={password} type='password' onChange={(e) => passChange(e)} name='password' />
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;