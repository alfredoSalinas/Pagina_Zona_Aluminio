import { ADD_PEDIDO, ADD_QUOTE } from "../types";

export const addOrder = order => ({
    type: ADD_QUOTE,
    payload: order
})

export const addPedido = pedido =>({
    type: ADD_PEDIDO,
    payload: pedido
})