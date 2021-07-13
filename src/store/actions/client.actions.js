
import { ADD_CLIENT } from "../types";

export const addClient = client => ({
    type: ADD_CLIENT,
    payload: client
})
