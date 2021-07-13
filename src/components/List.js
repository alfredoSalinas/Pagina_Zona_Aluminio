import React from 'react';
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

const TAX_RATE = 0.07;

const useStyles = makeStyles({
    table: {
        width: '80%',
        minWidth: 300,
        marginTop: 100,
        marginLeft: 50,
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
  return items.map(({ precio }) => precio).reduce((suma, i) => suma + i, 0);
}

const userData = useSelector(state=>state.auth.user)
const rows = useSelector(state=>state.quote.orders)

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

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
  }).catch(error=>{
    console.log(error)
  })

 console.log(data)
}

  const classes = useStyles();

  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell style={{width: 150, fontSize: 12}}>Descripcion</TableCell>
            <TableCell style={{width: 20, fontSize: 12}} align="right">Precio</TableCell>
            <TableCell style={{width: 20, fontSize: 12}} align="center">Cant.</TableCell>
            <TableCell style={{width: 20, fontSize: 12}} align="center">Unid.</TableCell>
            <TableCell style={{width: 20, fontSize: 12}} align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.id}>  
                <TableCell style={{fontSize: 10}}>{row.descripcion}</TableCell>
                <TableCell style={{fontSize: 10}} align="right">{row.precio}</TableCell>
                <TableCell style={{fontSize: 10}} align="right">{row.cantidad}</TableCell>
                <TableCell style={{fontSize: 10}} align="center">{row.unidad}</TableCell>
                <TableCell style={{fontSize: 10}} align="right">{ccyFormat(row.precio)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={2} />
            <TableCell style={{fontSize: 10}} colSpan={2}>Subtotal</TableCell>
            <TableCell style={{fontSize: 10}} align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell colSpan={2} />
            <TableCell style={{fontSize: 10}}>Tax</TableCell>
            <TableCell style={{fontSize: 10}} align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell style={{fontSize: 10}} align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell style={{fontSize: 10}} colSpan={2}>Total</TableCell>
            <TableCell style={{fontSize: 10}} align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    </TableContainer>
    <button onClick={guardar}>Cotizar</button>
    </div>
  );
}
