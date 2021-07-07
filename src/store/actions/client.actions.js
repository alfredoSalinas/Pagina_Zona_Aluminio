
import { ADD_CLIENT } from "../types";

export const addClient = product => ({
    type: ADD_CLIENT,
    payload: product
})