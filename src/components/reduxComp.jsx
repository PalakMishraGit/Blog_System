import { useState } from "react";
import {useDispatch} from "react-redux";

export default function ReduxComp(){
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    function addTask(){
        dispatch({type: 'ADD', payload: task});
    }
    function editTask(id){
        dispatch({type: "EDIT", payload: {id: id, data: task}});
    }
    function deleteTask(id){
        dispatch({type: "DELETE", payload: {id}});
    }
    
    return(
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <button onClick={() => editTask(0)}>Edit Task 0</button>
            <button onClick={() => deleteTask(0)}>Delete Task 0</button>
        </div>
    )
}