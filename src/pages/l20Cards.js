import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ComponentCard from '../common/components/componentCard';
import { fotosL20 } from '../common/hooks/fotosPerfiles';
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

const L20Cards = ()=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Barra categoria="PERFILES DE ALUMINIO" grupo="LINEA 20"/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {fotosL20.map((value) => (
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

export default L20Cards