import React, { useState, useEffect} from 'react'
import {createProducto, getProductos} from '../services/productService'

export const ProductsArray = ()=>{
    const lista = getProductos()
    let misproductos = []
    lista.then(querySnapshot => {
        querySnapshot.forEach(doc => {
        misproductos.push({nombre: doc.data().nombre, precio: doc.data().precio, stock: doc.data().stock})
        
        });
        
    });
    return misproductos

}

export const ListaProductos = ()=>{
    const misproductos = ProductsArray()
    return misproductos    
}