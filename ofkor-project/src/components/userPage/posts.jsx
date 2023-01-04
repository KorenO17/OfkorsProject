import { useUser } from "../../userContexts/userContext";
import { useEffect, useState } from "react";
function Info() {
    const {user , userPosts, setUserPosts} = useUser();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function takePosts() {
            let strPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            let arrPosts = await strPosts.json();
            setUserPosts(arrPosts);
        }
        if (userPosts.length < 1) 
            takePosts();
    }, []);

    async function ShowComments(i){
        let strComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userPosts[i].id}`);
        let arrComments = await strComments.json();
        setComments(arrComments);
        }
    function markUnmark(){
        console.log("ssdsd");
    }

    
    return (<div>
        <h2>My Posts</h2>
        {userPosts.map((post,i) =><div key={i}>
            <p>{post.title}</p>
            <button onClick={markUnmark}>mark</button>
            <button onClick={()=>ShowComments(i)}>comments</button></div> )}
            {comments.length>0?comments.map((comment,i) =><p key={i}><b>{comment.name}</b><br/>{comment.body}</p>):null}
    </div>)
       
}

export default Info;