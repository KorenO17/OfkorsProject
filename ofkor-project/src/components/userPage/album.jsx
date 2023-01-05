import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../userContexts/userContext";


function Albums(){
    let { setUser,user, userAlbums, setUserAlbums, setUserAlbum } = useUser();

    // let [bool, setBool] = useState(false)

    useEffect(()=>{
        async function takeAlbums() {
             setUser(JSON.parse(localStorage.getItem("user")))   
            
          if (user)  {let strAlbums = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`);
          console.log(user);
            let arrAlbums = await strAlbums.json();
            await arrAlbums.sort((a, b) =>{
                return a.title.localeCompare(b.title)
                  })
            setUserAlbums(arrAlbums);}
        }
            takeAlbums(userAlbums);
    },[])

    return (
        <>
        <h1>My Albums</h1>
        {userAlbums.map((album,i)=><Link to={`/UserPage/Albums/${i}`} onClick={()=>setUserAlbum(album)} className="link" key={album.id}>{album.title}</Link>)}
        </>
    )
}

export default Albums;