const initialState = {
    tasks: []
}
export function taskReducer(state = initialState, action){
    switch(action.type){
        case "ADD":
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case "EDIT":
            return{
                ...state,
                tasks: state.tasks.map((ele, idx) => idx === action.payload.id ? action.payload.data : ele)
            }
        case "DELETE":
            return{
                ...state,
                tasks: state.tasks.filter((ele, idx) => idx != action.payload)
            }
        default:
            return state;
    }
}