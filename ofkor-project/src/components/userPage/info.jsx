import { useUser } from "../../userContexts/userContext";

function Info() {
    const {user} = useUser() 
    return (<p>this page is is revealing all my secret personal info:<br />
        My name is {user.name}, I live in {user.address.street} {user.address.suite}, {user.address.city}.<br />My ID is {user.id} and if I or you who hacked me want to email me my mail is{user.email}.<br/>
        Btw you already have my password so here it is- {user.address.zipcode}.</p>)
       
}

export default Info;