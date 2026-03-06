import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoInput(){
    const [list, setList] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = e.target.elements[0].value;
        setList([...list, newTask]);
    }
    // useEffect(()=>{
    //     console.log("Current Todo List:", list);
        
    // }, [list])
    return(
        <>
        <form className="text-center" onSubmit={handleSubmit}>
            <input className="p-10" placeholder="Add a new task" />
            <button type="submit">Add Task</button>
        </form>
        <TodoList list={list} />
        </>
    ); 
}