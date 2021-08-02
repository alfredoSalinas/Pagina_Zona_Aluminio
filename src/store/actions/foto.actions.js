import { ADD_FOTO } from "../types";

export const addFotos = foto => ({
    type: ADD_FOTO,
    payload: foto
})