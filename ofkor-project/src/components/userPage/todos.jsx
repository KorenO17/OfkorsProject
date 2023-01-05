import { useState, useEffect } from "react";
import { useUser } from "../../userContexts/userContext";

function Todos() {
    console.log("freere");
    let [done, setDone] = useState(false)
    let [bool, setBool] = useState(false)
    let [sorting, setSorting] = useState("id")
    let { user, userTodos, setUserTodos } = useUser();
    useEffect(() => {
        async function takeTodos() {
            let strTodos = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
            let arrTodos = await strTodos.json();
            setUserTodos(arrTodos);
        }
        if (!bool && userTodos.length < 1) 
            takeTodos();
        if (userTodos) {
            setBool(true);
        }

    }, []);
    useEffect(()=>{console.log("df");
    setTimeout(()=>changeSort(sorting),0)}, [done]);

    function checkDiff(e, i) {
        let o = [...userTodos];
        o[i].completed = !o[i].completed
        setUserTodos(o);
        setDone((prevDone) =>!prevDone);
    }

    function changeSort(val){
        let o = [...userTodos];
        
        if(val == "id"){
            o.sort((a, b) =>{
                return a.id - b.id
                  });
        }
        else if(val == "name"){
            console.log(o,"first");
            o.sort((a, b) =>{
            return a.title.localeCompare(b.title)
              });
              console.log(o,"sec");
        }
        else if(val == "unchecked"){
            o.sort((a, b) =>{
                return a.completed? 1:-1;
                  });
        }
        else if(val == "checked"){
            o.sort((a, b) =>{
                return a.completed? -1:1;
                  });
        }
        else if(val == "rand"){
            o.sort((a, b) =>{
                return Math.random()-0.5;
                  });
        }
        setSorting(val);    
        setUserTodos(o);
    }

    return (
        <div>
            <h3>Todos</h3>
            <ol>
                <select id="sorting" value={sorting} onChange={(e)=>{changeSort(e.target.value)}}>
                    <option value="id">Sort by ID</option>
                    <option value="unchecked" >Sort by not Done</option>
                    <option value="checked" >Sort by Done</option>
                    <option value="name">Sort by Alphabet</option>
                    <option value="rand">Sort Randomaly</option>
                </select>
                {userTodos.length>0?(userTodos.map((todo, i) => (<li
                    key={todo.id}
                    style={userTodos[i].completed ? { background: "green" } : { background: "red" }}>
                    <input type="checkbox"
                        checked={userTodos[i].completed}
                        onChange={(e) => checkDiff(e, i)} />
                        {
                        todo.title}
                </li>))):""}
            </ol>
        </div>)
}

export default Todos;