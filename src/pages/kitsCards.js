import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ComponentCard from '../common/components/componentCard';
import { Paper } from '@material-ui/core';

import hastesMaxi from '../assets/ZONA/1.KITS/HASTESMAXI.png'
import kitBasculanteGrande7 from '../assets/ZONA/1.KITS/KITBASCULANTEGRANDE7.png'
import kitBasculantePeque6 from '../assets/ZONA/1.KITS/KITBASCULANTEPEQUE6.png'
import kitPivote8 from '../assets/ZONA/1.KITS/KITPIVOTE8.png'
import kitPuerta1 from '../assets/ZONA/1.KITS/KITPUERTA1.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
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
    title: 'Hastes Maxi',
    description: 'KITS',
    foto: hastesMaxi
  },
  {
    id: 2,
    title: 'Kit Basculante Grande 7',
    description: 'KITS',
    foto: kitBasculanteGrande7
  },
  {
    id: 3,
    title: 'Kit Basculante Pequeño 6',
    description: 'KITS',
    foto: kitBasculantePeque6
  },
  {
    id: 4,
    title: 'Kit Pivote 8',
    description: 'KITS',
    foto: kitPivote8
  },
  {
    id: 5,
    title: 'Kit Puerta',
    description: 'KITS',
    foto: kitPuerta1
  },
]

 const KitsCards = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div style={{marginTop: 0, backgroundColor: '#444', color: '#fff'}} >
            <p style={{marginLeft: 50}}>ACCESORIOS VIDRIO TEMPLADO</p>
            <p style={{marginLeft: 50, fontSize: 24 }}><b>KITS</b></p>
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

export default KitsCards