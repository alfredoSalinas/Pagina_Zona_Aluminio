import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Facebook from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'
import Email from '@material-ui/icons/Email';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { authenticate } from '../services/productService';
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase/app'
import { Avatar } from '@material-ui/core'

import logo from '../images/logo.png'
import {
  Link
} from "react-router-dom";
import { signIn } from '../store/actions/auth.actions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }),
);

 const Header = ()=> {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const userData = useSelector(state=>state.auth.user)

  const usuario = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
        .then(result => {
          console.log('Resultado ', result.user.uid)
        }
        )
    firebase.auth().onAuthStateChanged(user =>{
      dispatch(signIn({
        id: user.uid,
        user: user.email,
        foto: user.photoURL
      }))
    })
  }

  const getUsuario= ()=>{
		console.log(userData.id)
	}


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} style={{position: 'relative'}} >
      <AppBar position="fixed" style={{backgroundColor: '#218c74'}}>
        <Toolbar>
          <img src={logo} width="100px" />
          <Typography variant="h6" className={classes.title}>
            {userData!=null ? userData.id: null}              
          </Typography>
          {userData!=null ? <Avatar src={userData.foto}/>: null}
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={usuario}
          >
            <AccountCircle />
          </IconButton>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={getUsuario}
          >
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem >
            <Link 
              to="/" 
              style={{textDecoration: 'none', color: 'inherit'}}
              onClick={handleDrawerClose}
            >Inicio</Link>
            </ListItem>
            <ListItem >
            <Link to="/productos" style={{textDecoration: 'none', color: 'inherit'}}
            onClick={handleDrawerClose}
            >Productos</Link>
            </ListItem>
        </List>
      </Drawer>
      <Fab 
        size="small"
        aria-label="add" 
        style={{  
          marginTop: 200, 
          position: 'fixed',
        }} >
        <Facebook />
      </Fab>
      <Fab size="small" aria-label="add" style={{marginTop: 250, position: 'fixed'}} >
        <WhatsApp />
      </Fab>
      <Fab size="small" aria-label="add" style={{marginTop: 300, position: 'fixed'}} >
        <Email />
      </Fab>
    </div>
  );
}

export default Header