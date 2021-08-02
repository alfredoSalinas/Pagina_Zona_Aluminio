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
import { quincalleria } from '../store/datos';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

const columns = [
  { id: 'Nro', label: 'ID', minWidth: 170 },
  { id: 'DESCRIPCION', label: 'Descripcion', minWidth: 100 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = quincalleria

const useStyles = makeStyles({
  root: {
    marginTop: 80,
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function QuincalleriaTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Nro</TableCell>
              <TableCell>Descripcion Quincalleria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell>{item.Nro}</TableCell>
                <TableCell>{item.DESCRIPCION}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
