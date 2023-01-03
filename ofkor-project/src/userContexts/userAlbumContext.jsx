import React, { createContext, useState, useContext } from 'react';

const UserAlbumContext = createContext();

export const useUserAlbum = () => useContext(UserAlbumContext)

export const UserAlbumProvider = ({ children }) => {
    const [userAlbum, setUserAlbum] = useState();
    return <UserAlbumContext.Provider value={{ userAlbum, setUserAlbum }}>
        {children}
    </UserAlbumContext.Provider>;
}