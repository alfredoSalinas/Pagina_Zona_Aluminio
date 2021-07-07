import { ADD_QUOTE } from "../types";

const initialState = {
    orders:[]
}

export default (state=initialState, action)=>{
    switch (action.type) {
        case ADD_QUOTE:
        return {
            ...state,
            orders: [...state.orders, action.payload]
        };
        default:
        return state;
    }
}