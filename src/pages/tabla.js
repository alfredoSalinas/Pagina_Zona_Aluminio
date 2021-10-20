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
import { signIn, signOut } from '../store/actions/auth.actions';
import { addOrder } from '../store/actions/quote.actions'
import { useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import firebase from 'firebase/app'
import "firebase/auth";


const columns = [
  { id: 'codigo', label: 'Codigo', minWidth: 30 },
  { id: 'descripcion', label: 'Descripcion', minWidth: 100 },
  {
    id: 'unidad',
    label: 'Unidad',
    minWidth: 30,
    align: 'center',
  },
  {
    id: 'precio',
    label: 'Precio',
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

export default function DataTable() {
  const rows = useSelector(state => state.product.products)
  const orders = useSelector(state => state.quote.orders)
  const isSignin = useSelector(state => state.auth.isSignin)
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [productos, setProductos] = React.useState([])

  const usuario = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log('Resultado ', result.user.uid)
        dispatch(signIn({
          id: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          foto: result.user.photoURL
        }))
      })
      .catch(err => {
        console.log(err.message)
      })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.displayName)
      } else {
        console.log("usuario null");
      }
    })
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    if (!isSignin) {
      usuario()
    }
    setProductos(rows)
  }, [])

  const buscarProducto = (valor) => {

    let r = new RegExp(valor, 'ig')
    const p = rows.filter((item) => {
      return r.test(item.descripcion)
    })
    setProductos(p)
  }

  const cotizar = (row) => {
    const pedido = {
      "codigo": row.codigo,
      "descripcion": row.descripcion,
      "cantidad": 1,
      "unidad": row.unidad,
      "precio": row.precio,
      "total": row.precio * 1
    }
    dispatch(addOrder(pedido))
  }

  return (
    <>
      {isSignin ? (
        <Paper className={classes.root}>
          <input type="text" style={{ marginRight: 40 }} onChange={(e) => buscarProducto(e.target.value)} />
          <Link to="/pedidos" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Badge badgeContent={orders.length} color="primary">
              <ShoppingCart />
            </Badge>
          </Link>
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
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.codigo} >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} style={{ fontSize: 10 }}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                            {column.id === 'accion' ? <button onClick={() => {
                              cotizar(row)
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
