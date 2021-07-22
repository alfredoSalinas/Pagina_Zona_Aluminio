import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { SlowMotionVideo } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    //backgroundColor: '#ff6d00',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#1b5e20'
  },
  media: {
    width: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ComponentCard = ({tarjeta})=> {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        title={tarjeta.description}
      >
        <img src={tarjeta.foto} className={classes.media}/>
      </CardMedia>
      <CardContent style={{borderTop: 'solid'}}>
        <Typography variant="body2" color="textSecondary" component="p" borderStyle>
          {tarjeta.title}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

export default ComponentCard