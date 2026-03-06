import { useReducer } from "react";

export default function FormReducer(){
    function reducer(state, action){
        if(action.type === 'setName'){
            return {...state, name: action.name};
        } else if(action.type === 'setEmail'){  
            return {...state, email: action.email};
        }
        return state;
    }
    const [state, dispatch] = useReducer(reducer, {name: '', email: ''});
    return(
        <div className="flex flex-col items-center">
            <form className="flex flex-col items-center">
                <input onClick={(e) => dispatch({type: "setName", name: e.target.value})} className="px-4 py-2 border border-gray-700 mb-2" type="text" placeholder="Name" name="name" />
                <input onClick={(e) => dispatch({type: "setEmail", email: e.target.value})} className="px-4 py-2 border border-gray-700 mb-2" type="email" placeholder="Email" name="email" />
                <button className="px-4 py-2 border border-gray-700 mb-2" type="submit">Reset</button>
            </form>
            <div>Name: {state.name}</div>
            <div>Email: {state.email}</div>
            
        </div>
    )
}
