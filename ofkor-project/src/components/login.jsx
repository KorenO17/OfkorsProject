import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAlbum } from '../userContexts/userAlbumContext';
import { useUser } from '../userContexts/userContext';


function Login() {
    const navigate = useNavigate();
    const [users, setUsers] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [albums, setAlbums] = useState();

    const { user, setUser } = useUser()
    const { setUserAlbum} = useUserAlbum()

    useEffect(() => {
        async function fetchData() {
            let strArr = await fetch('https://jsonplaceholder.typicode.com/users')
            let arr = await strArr.json();
            setUsers(arr);
            let albumsStr = await fetch('https://jsonplaceholder.typicode.com/albums')
            let albums = await albumsStr.json();
            setAlbums(albums);
        }
        fetchData()
    }, [])


    async function handleSubmit (e) {
        e.preventDefault()
        let bool = false
        for await (let currentUser of users) {
            if (currentUser.username === username && currentUser.address.zipcode === password) {
                bool = true
                 setUser(currentUser)
            }
        }


        if (bool) {
            let userAlbumArr = []
            for await (let album of albums) {
                if (user.id == album.userId) {
                    userAlbumArr.push(album)
                }
                
            }
            await setUserAlbum(userAlbumArr)
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