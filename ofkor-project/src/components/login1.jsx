import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../userContexts/userContext';



function Login() {
    const navigate = useNavigate();
    const [users, setUsers] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [albums, setAlbums] = useState();
    // const [posts, setPosts] = useState();
    // const [todos, setTodos] = useState();
    // const [pictures, setPictures] = useState();

    const { user, setUser,setUserPosts, setUserTodos, setUserAlbum} = useUser()
    // const { setUserAlbum} = useUserAlbum()
    // const { setUserPosts} = useUserPosts()
    // const { setUserTodos} = useUserTodos()


    // useEffect(() => {
    //     async function fetchData() {
    //         let strArr = await fetch('https://jsonplaceholder.typicode.com/users')
    //         let arr = await strArr.json();
    //         setUsers(await arr);
    //         let albumsStr = await fetch('https://jsonplaceholder.typicode.com/albums')
    //         let albums = await albumsStr.json();
    //         setAlbums(await albums);
    //         let todosStr = await fetch('https://jsonplaceholder.typicode.com/todos')
    //         let todos = await todosStr.json();
    //         setTodos(await todos);
    //         let postsStr = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         let posts = await postsStr.json();
    //         setPosts(await posts);
    //         let picturesStr = await fetch('https://jsonplaceholder.typicode.com/photos')
    //         let pictures = await picturesStr.json();
    //         setPictures(await pictures);
    //     }
    //     fetchData()
    // }, [])


    async function handleSubmit (e) {
        e.preventDefault()
        let bool = false
        let theUser
        for  await(let currentUser of users) {
            if (currentUser.username === username && currentUser.address.zipcode === password) {
                bool = true
                theUser=currentUser;
                  setUser(currentUser)
                // theUser=currentUser;
            }
        }
        console.log(await user)

        if (bool) {
             let userAlbumArr = []
            let userPostsArr = []
            let userTodosArr = []
            // let userPhotosArr = []

            for await (let post of posts) {
                if (theUser.id == post.userId) {
                    userPostsArr.push(post)
                }
                
            }

            await setUserPosts(userPostsArr)

            for await (let todo of todos) {
                if (theUser.id == todo.userId) {
                    userTodosArr.push(todo)
                }
                
            }

            await setUserTodos(userTodosArr)

            for await (let album of albums) {
                
                if (theUser.id == album.userId) {
                    album.pictures=[];
                    for (let picture of pictures){
                        if(album.id == picture.albumId){
                            album.pictures.push(picture)
                        }
                    }
                    
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