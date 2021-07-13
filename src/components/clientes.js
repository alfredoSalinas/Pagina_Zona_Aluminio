import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { datos } from '../store/datos'
import { useSelector, useDispatch } from 'react-redux'
import {addOrder} from '../store/actions/quote.actions'
import { useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { getClientes } from '../services/firebase'
import { useState } from 'react';


const columns = [
  { id: 'NIT', label: 'Nit', minWidth: 30 },
  { id: 'nombre', label: 'Nombre', minWidth: 100 },
  {
    id: 'direccion',
    label: 'Direccion',
    minWidth: 30,
    align: 'center',
  },
  {
    id: 'telefono',
    label: 'Telefono',
    minWidth: 30,
    align: 'right',
  },
  {
    id: 'accion',
    label: 'Accion',
    minWidth: 50,
    align: 'center'
  }
];

const useStyles = makeStyles({
  root: {
    marginTop: 100,
  },
  container: {
    maxHeight: 440,
  },
});

export default function Clientes() {
  const rows = useSelector(state=>state.client.clientes)
  const orders = useSelector(state=>state.quote.orders)
  const isSignin = useSelector(state=>state.auth.isSignin)
  const isAdmin = useSelector(state=>state.admin.isAdmin)
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [productos, setProductos] = React.useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch()

useEffect(()=>{
  setProductos(rows)
},[])

const buscarProducto = (valor)=>{

  let r = new RegExp(valor, 'ig')
  const p =rows.filter((item)=>{
    return r.test(item.nombre) || r.test(item.NIT)
  })
  setProductos(p)
}

const cliente = () =>{
  getClientes((cliente)=>{
    console.log(cliente)
  })
}

  return (
    <>
    {isAdmin && isSignin ? (
    <Paper className={classes.root}>
      <button onClick={cliente}>Clientes</button>
      <input type="text" style={{marginRight: 40 }} onChange={(e)=> buscarProducto(e.target.value)} />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ width: column.minWidth, fontSize: 10 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.NIT} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{fontSize: 10}}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                        { column.id === 'accion' ? <button onClick={()=>{

                        }
                        }
                        >Add</button> : null

                        }
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={productos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  ) : <Redirect to="/" />
  }
  </>
  );
}
