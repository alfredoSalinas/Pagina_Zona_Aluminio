import React, {useState, useEffect} from 'react'
import firebase from 'firebase/app'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {createProducto, getProductos} from '../services/productService'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TablaProducto = () => {
  const classes = useStyles();
    const [foto, setFoto] = useState({
        valor:''
    })
    const [producto, setProducto] = useState({
        id:'',
        data : {}
    })
    const [productos, setProductos] = useState([])

    const listProductos = ()=>{
        const lista = getProductos()
        const misproductos = []
        lista.then(querySnapshot => {
          querySnapshot.forEach(doc => {
            misproductos.push([doc.id, doc.data()])
            
          });
          setProductos([...productos, misproductos])
            
        });
    }

    const getFoto = (id)=>{
        const storageRef = firebase.storage().ref(id+'.png')
          storageRef.getDownloadURL()
          .then(function(url){
            setFoto({...foto, valor: url})
          })
        
        console.log(foto.valor)
    }
    const verFoto=()=>{
        
    }

    const handleClick=(e)=>{
        getFoto(e)
    }

    const persona=[
        {
            id:1,
            nombre:'Alfredo'
        },
        {
            id:2,
            nombre:'Carlos'
        }

    ]

    
    useEffect(() => {
        listProductos()
    }, [])

    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((row) =>
            row.map(celda=>
              <TableRow key={celda[0]}>
                <TableCell component="th" scope="row">
                  {celda[1].nombre}
                </TableCell>
                <TableCell align="right">{celda[1].nombre}</TableCell>
                <TableCell align="right">{celda[1].precio}</TableCell>
                <TableCell align="right">{celda[1].stock}</TableCell>
                <TableCell align="right">{celda[1].propietario}</TableCell>
              </TableRow>
            )
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default TablaProducto