import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ComponentCard from './componentCard';
import foto1 from '../images/perfiles.jpeg'
import foto2 from '../images/acPerfiles.jpeg'
import foto3 from '../images/templado.jpeg'
import foto4 from '../images/acTemplado.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    foto: foto1
  },
  {
    id: 2,
    title: 'ACCESORIOS DE ALUMINIO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto2
  },
  {
    id: 3,
    title: 'VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto3
  },
  {
    id: 4,
    title: 'ACCESORIOS PARA VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto4
  },
]

 const ContentCards = ()=> {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
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
  );
}

export default ContentCards