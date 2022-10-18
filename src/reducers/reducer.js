const initialState = {
    show: false,
};

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case "SET_IN_TRUE":
            return {
                ...state,
                show: true,
            }
        case "SET_IN_FALSE":
            return{
                ...state,
                show: false
            }
        default: return{...state}
    }
}