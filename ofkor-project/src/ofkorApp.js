import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import { UserProvider } from './userContexts/userContext';
import UserPage from './components/userPage';
import Posts from './components/userPage/posts';
import Todos from './components/userPage/todos';
import Albums from './components/userPage/album';
import Photos from './components/userPage/photos/photos';
import Error from './components/error';
import './ofkorApp.css';



function App() {
    return (

        <BrowserRouter>

            <UserProvider>
                    <Routes>

                        <Route path="/" element={<Login />} />
                        <Route path="/UserPage" element={<UserPage />} >
                            <Route path="Albums" element={<Albums />} />
                            <Route path="Albums/:id" element={<Photos />} />
                            
                            <Route path="todos" element={<Todos />} />
                            <Route path="posts" element={<Posts />} />
                        </Route>
                        <Route path="*" element={<Error />} />
                    </Routes>
            </UserProvider>
        </BrowserRouter>)
}

export default App;