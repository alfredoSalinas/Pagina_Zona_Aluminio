import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ComponentCard from '../common/components/componentCard';
import { fotosHerrajesMinis } from '../common/hooks/fotos';
import Barra from '../common/components/barra';
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

const MinisCards = ()=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Barra categoria="ACCESORIOS VIDRIO TEMPLADO" grupo="MINIS"/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {fotosHerrajesMinis.map((value) => (
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

export default MinisCards