import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import { authenticate } from '../services/productService';
import { useSelector, useDispatch } from 'react-redux'
//import db from '../firebase.config'
import firebase from 'firebase/app'
import "firebase/auth";
import { Avatar, Button, List, ListItem, ListItemText } from '@material-ui/core'
import MenuListComposition from '../common/components/menu'
import logo from '../images/logo.png'
import {
  Link
} from "react-router-dom";
import { signIn, signOut } from '../store/actions/auth.actions';
//import { db } from '../services/firebase/setup'
import DrawerMenu from '../common/components/drawerMenu';


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
  const isSignin = useSelector(state=>state.auth.isSignin)

  const usuario = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
        .then(result => {
          console.log('Resultado ', result.user.uid)
          dispatch(signIn({
            id: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            foto: result.user.photoURL
          }))
        })
        .catch(err =>{
          console.log(err.message)
        })
    firebase.auth().onAuthStateChanged(user =>{
      if (user) {
        console.log(user.displayName)
      } else {
           console.log("usuario null");
      }
    })
  }
/*
  const datosUsuario = firebase.auth().currentUser

  const getUsuario= ()=>{
		db.collection("clientes").get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.data())
      });
    }).catch(error=>{
      console.log(error)
    })
	}
  */

  const logout = ()=>{
    firebase.auth().signOut().then(() => {
      console.log('Adios .....')
      dispatch(signOut())
    }).catch((error) => {
      // An error happened.
      
    });
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
      <AppBar position= 'fixed' style={{backgroundColor: '#444'}}>
        <Toolbar>
          <img src={logo} width="100px" />
          <Typography variant="h6" className={classes.title}>

          </Typography>
          <Hidden xsDown >
          <MenuListComposition />
          </Hidden>
          
          {isSignin ? <Avatar src={userData && userData.foto} onClick={logout}/>:
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={usuario}
          >
            <AccountCircle />
          </IconButton>
          }
          <Hidden smUp >
          <IconButton color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          >
          <MenuIcon />
          </IconButton>
          </Hidden>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <DrawerMenu drawerClose={handleDrawerClose}/>        
      </Drawer>
    </div>
  );
}

export default Header
