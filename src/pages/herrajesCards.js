import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

import ComponentCard from '../common/components/componentCard';
import h1510 from '../assets/ZONA/2.HERRAJES DE CORRER/1510.png'
import h1510c from '../assets/ZONA/2.HERRAJES DE CORRER/1510C.png'
import h1511 from '../assets/ZONA/2.HERRAJES DE CORRER/1511.png'
import h1511a from '../assets/ZONA/2.HERRAJES DE CORRER/1511A.png'
import h1570m from '../assets/ZONA/2.HERRAJES DE CORRER/1570M.png'
import h1571m from '../assets/ZONA/2.HERRAJES DE CORRER/1571M.png'
import { Paper } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
    backgroundColor: '#000'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const cards = [
  {
    id: 1,
    title: '1510',
    description: 'HERRAJES DE CORRER',
    foto: h1510
  },
  {
    id: 2,
    title: '1510C',
    description: 'HERRAJES DE CORRER',
    foto: h1510c
  },
  {
    id: 3,
    title: '1511',
    description: 'HERRAJES DE CORRER',
    foto: h1511
  },
  {
    id: 4,
    title: '1511A',
    description: 'HERRAJES DE CORRER',
    foto: h1511a
  },
  {
    id: 5,
    title: '1570M',
    description: 'HERRAJES DE CORRER',
    foto: h1570m
  },
  {
    id: 6,
    title: '1571M',
    description: 'HERRAJES DE CORRER',
    foto: h1571m
  },
]

 const HerrajesCards = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div style={{marginTop: 0, backgroundColor: '#444', color: '#fff'}} >
            <p style={{marginLeft: 50}}>ACCESORIOS VIDRIO TEMPLADO</p>
            <p style={{marginLeft: 50, fontSize: 24 }}><b>HERRAJES</b></p>
        </div>
    
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {cards.map((value) => (
            <Grid key={value.id} item>
              <ComponentCard tarjeta={value} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default HerrajesCards