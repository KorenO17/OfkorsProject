// import React, { useEffect, useState } from 'react';
// import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useUserAlbum } from '../userContexts/userAlbumContext';
import { useUser } from '../userContexts/userContext';

function UserPage() {
    const {user}=useUser();
    const {userAlbum} = useUserAlbum()

    useEffect(()=>{
        console.log(userAlbum)
    },[])
    return (<div>
        <h1>{user.username}</h1>
    </div>)
}

export default UserPage