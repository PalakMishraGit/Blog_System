import { useReducer } from "react";

export default function Reducer(){
    const reducer = (state, action) => {
        if(action.type === 'increment'){   
            return {count: state.count + state.step, step: state.step};
        } else if(action.type === 'decrement'){
            return {count: state.count - state.step, step: state.step};
        }
        else if(action.type === 'setStep'){
            return {count: state.count, step: action.step};
        }
    }
    const [state, dispatch] = useReducer(reducer, {count: 0, step: 1});
    return(
        <div className="flex flex-col items-center">
            <input className="px-4 py-2 border border-gray-700 mb-2" type="number" onChange={(e) => {dispatch({type: 'setStep', step: Number(e.target.value)})}} />
            <button className="px-4 py-2 border border-gray-700 mb-2" onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button className="px-4 py-2 border border-gray-700 mb-2" onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <div>Count: {state.count}</div>
        </div>
    )
}