import { ADD_QUOTE } from "../types";

export const addOrder = order => ({
    type: ADD_QUOTE,
    payload: order
})