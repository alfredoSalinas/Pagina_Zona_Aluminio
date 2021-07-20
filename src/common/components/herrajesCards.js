import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

import ComponentCard from './componentCard';
import h1510 from '../../assets/ZONA/2.HERRAJES DE CORRER/1510.jpg'
import h1510c from '../../assets/ZONA/2.HERRAJES DE CORRER/1510C.jpg'
import h1511 from '../../assets/ZONA/2.HERRAJES DE CORRER/1511.jpg'
import h1511a from '../../assets/ZONA/2.HERRAJES DE CORRER/1511A.jpg'
import h1570 from '../../assets/ZONA/2.HERRAJES DE CORRER/1570M.jpg'
import h1571m from '../../assets/ZONA/2.HERRAJES DE CORRER/1571M.jpg'
import { Paper } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80
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
    title: 'PERFILES DE ALUMINIO',
    description: 'Color Natural, Champagne y Bronce',
    foto: h1510
  },
  {
    id: 2,
    title: 'ACCESORIOS DE ALUMINIO',
    description: 'Color Natural, Champagne y Bronce',
    foto: h1510c
  },
  {
    id: 3,
    title: 'VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: h1511
  },
  {
    id: 4,
    title: 'ACCESORIOS PARA VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: h1511a
  },
  {
    id: 5,
    title: 'ACCESORIOS PARA VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: h1570
  },
  {
    id: 6,
    title: 'ACCESORIOS PARA VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: h1571m
  },
]

 const HerrajesCards = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div style={{position: 'fixed', marginTop: 0, backgroundColor: '#218c74'}} >
            ACCESORIOS VIDRIO TEMPLADO - HERRAJES DE CORRER
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