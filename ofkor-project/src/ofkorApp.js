import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import { UserProvider } from './userContexts/userContext';
import UserPage from './components/userPage';
import { UserAlbumProvider } from './userContexts/userAlbumContext';

function App() {
    return (

        <BrowserRouter>

            <UserProvider>
                <UserAlbumProvider>
                    <Routes>

                        <Route path="/" element={<Login />} />
                        <Route path="/UserPage" element={<UserPage />} >
                            {/* <Route path="/Albums" element={<Albums />} /> */}
                        </Route>
                    </Routes>
                </UserAlbumProvider>
            </UserProvider>
        </BrowserRouter>)
}

export default App;