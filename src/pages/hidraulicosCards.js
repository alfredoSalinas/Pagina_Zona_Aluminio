import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ComponentCard from '../common/components/componentCard';
import { fotosKits } from '../common/hooks/fotos';
import fondoFranja from '../assets/portada/fondoFranja.png'
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

const HidraulicosCards = ()=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{marginTop: 0, backgroundImage: `url(${fondoFranja})`, backgroundSize: 'cover'}} >
        <p style={{marginLeft: 50, color: 'lightgreen'}}>ACCESORIOS VIDRIO TEMPLADO</p>
        <p style={{marginLeft: 50, color: 'lightgreen',fontFamily: "mentone", fontSize: 24 }}><b>HIDRAULICOS</b></p>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {fotosKits.map((value) => (
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

export default HidraulicosCards