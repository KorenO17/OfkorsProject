import { useEffect, useState } from "react";
import { useUser } from "../../../userContexts/userContext";




function Photos() {
    let { userPhotos, setUserPhotos, userAlbum } = useUser();

    let [photo, setPhoto] = useState(0);

    useEffect(() => {
        async function takePhotos() {
           if(userAlbum.id&&!JSON.parse(localStorage.getItem("userPhotos"))) {
                let strPhotos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userAlbum.id}`);
                let arrPhotos = await strPhotos.json();
                await arrPhotos.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
                setUserPhotos(arrPhotos);
                localStorage.setItem("userPhotos", JSON.stringify(arrPhotos));
                console.log("ENTERANCE FETCH")
            }
            else if(!JSON.parse(localStorage.getItem("userPhotos"))){
                let strPhotos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${JSON.parse(localStorage.getItem("userAlbum")).id}`);
                let arrPhotos = await strPhotos.json();
                await arrPhotos.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
                setUserPhotos(arrPhotos);
                localStorage.setItem("userPhotos", JSON.stringify(arrPhotos));
                console.log("ENTERANCE FETCH")
            }
            else{
                setUserPhotos(JSON.parse(localStorage.getItem("userPhotos")));
                console.log("NO FETCH");
                
            }
        }
        takePhotos(userPhotos);
    }, [])

    const prevPhoto = () => {
        if (photo > 0) {
            setPhoto(photo - 1)
        }
        else {
            setPhoto(userPhotos.length - 1)
        }
    }
    const nextPhoto = () => {
        if (photo < userPhotos.length - 1) {
            setPhoto(photo + 1)
        }
        else {
            setPhoto(0)
        }
    }

    return (userPhotos.length > 0 ? <>
        <h1>Photos Gallery - {userAlbum.title}</h1>
        <h2>{userPhotos[photo].title}</h2>
        <img src={userPhotos[photo].url} alt={userPhotos[photo].title} style={{ height: 'auto', width: '30%' }}></img>
        <button onClick={() => nextPhoto()}>Next</button>
        <button onClick={() => prevPhoto()}>Previous</button>
    </> : "")
}

export default Photos;