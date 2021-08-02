import { ADD_FOTO } from "../types";

const initialState = {
    fotos:[]
}

export default (state=initialState, action)=>{
    switch (action.type) {
        case ADD_FOTO:
        return {
            ...state,
            fotos: action.payload
        };
        default:
        return state;
    }
}