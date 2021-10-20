import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { createPedido } from '../services/productService';
import { Button, IconButton, TextField } from '@material-ui/core';
import { addPedido } from '../store/actions/quote.actions';
import { DeleteForeverRounded } from '@material-ui/icons';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
    table: {
        width: '100%',
        minWidth: 200,
        marginTop: 100,
        fontSize: 8,
    },
});

export default function List() {

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ total }) => total).reduce((suma, i) => suma + i, 0);
}

const dispatch = useDispatch()

const userData = useSelector(state=>state.auth.user)
const rows = useSelector(state=>state.quote.orders)
const [datos, setDatos] = useState([])
const [numero, setNumero] = useState(1)
const [mensaje, setMensaje] = useState('')
const miDato = useRef()
const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const handleChange = (e, i)=>{
  const misDatos = rows
  misDatos[i].cantidad = e.target.value
  misDatos[i].total = misDatos[i].cantidad * misDatos[i].precio
  dispatch(addPedido(misDatos))
  setNumero(e.target.value)
}

const handleDelete = (i) => {
  const misDatos = rows
  misDatos.splice(i,1)
  dispatch(addPedido(misDatos))
  setNumero(numero + 1)
}


const guardar = ()=>{
  const data = {
    id:'pedido 5',
    cliente: userData.name,
    fecha: new Date(),
    detalle: rows,
    subTotal: invoiceSubtotal,
    total: invoiceTotal
  }
  createPedido(data).then(()=>{
    console.log('Pedido realizado')
    setMensaje('Pedido realizado')
  }).catch(error=>{
    console.log(error)
  })
  
  //alert('Pedido realizado')
 console.log(data)
}

  const classes = useStyles();

  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize: 12, paddingLeft: 0, paddingRight: 0}}>Descripcion</TableCell>
            <TableCell style={{fontSize: 12, paddingLeft: 0, paddingRight: 0}} align="center">Unid.</TableCell>
            <TableCell size='small' style={{fontSize: 12, paddingLeft: 0, paddingRight: 0}} align="right">Precio</TableCell>
            <TableCell style={{fontSize: 12, paddingLeft: 0, paddingRight: 0}} align="center">Cant.</TableCell>
            <TableCell style={{fontSize: 12, paddingLeft: 0, paddingRight: 0}} align="center">Total</TableCell>
            <TableCell style={{fontSize: 12, paddingLeft: 0, paddingRight: 0}} align="center">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row, i) => (
            <TableRow key={i}>  
                <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}}>{row.descripcion}</TableCell>
                <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} align="center">{row.unidad}</TableCell>
                <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} align="right">{row.precio}</TableCell>
                <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} align="right">
                  <TextField type="number" value={row.cantidad} style={{width: 50}}
                  onChange={(e)=>handleChange(e, i)} />
                </TableCell>  
                <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} align="right">{ccyFormat(row.total)}</TableCell>
                <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} align="center">
                  <IconButton onClick={()=>handleDelete(i)}>
                    <DeleteForeverRounded />
                  </IconButton>
                </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={2} />
            <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} colSpan={2}>Subtotal</TableCell>
            <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} align="right">{ccyFormat(subtotal(rows))}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell colSpan={2} />
            <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}}>Tax</TableCell>
            <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} colSpan={2}>Total</TableCell>
            <TableCell style={{fontSize: 10, paddingLeft: 0, paddingRight: 0}} align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    </TableContainer>
    <Button onClick={guardar} variant="contained" color="primary" style={{marginLeft:50, marginTop:20}} >Cotizar</Button>
    <p>{mensaje}</p>
    </div>
  );
}
