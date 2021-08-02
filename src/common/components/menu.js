import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
//import ClickAwayListener from '@material-ui/core/ClickAwayListener';
//import Grow from '@material-ui/core/Grow';
//import Paper from '@material-ui/core/Paper';
//import Popper from '@material-ui/core/Popper';
//import MenuItem from '@material-ui/core/MenuItem';
//import MenuList from '@material-ui/core/MenuList';
//import ArrowRight from '@material-ui/icons/ArrowRight';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ProductosPopper from './productosPopper';
import MenuPopper from './menuPopper';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  menu:{
    color: '#fff'
  }
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openAl, setOpenAl] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [menuOpenAl, setMenuOpenAl] = React.useState(false)
  const anchorRef = React.useRef(null);
  const anchorRefAl = React.useRef(null);
  const menu = React.useRef(null)
  const menuAl = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleMenuToggleAl = () => {
    setMenuOpenAl((prevMenuOpenAl) => !prevMenuOpenAl);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleCloseAl = (event) => {
    if (anchorRefAl.current && anchorRefAl.current.contains(event.target)) {
      return;
    }

    setOpenAl(false);
  };


  const handleMenuClose = (event) => {
    if (menu.current && menu.current.contains(event.target)) {
      return;
    }

    setMenuOpen(false);
  };

  const handleMenuCloseAl = (event) => {
    if (menuAl.current && menuAl.current.contains(event.target)) {
      return;
    }

    setMenuOpenAl(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  function handleListKeyDownAl(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenAl(false);
    }
  }


  function handleMenuKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setMenuOpen(false);
    }
  }

  function handleMenuKeyDownAl(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setMenuOpenAl(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  const prevOpenAl = React.useRef(openAl);
  const prevMenuOpen = React.useRef(menuOpen);
  const prevMenuOpenAl = React.useRef(menuOpenAl);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  React.useEffect(() => {
    if (prevMenuOpen.current === true && menuOpen === false) {
      menu.current.focus();
    }

    prevMenuOpen.current = menuOpen;
  }, [menuOpen]);

  return (
    <div >
			<Button className={classes.menu}>
        <Link to="/" className={classes.link} >Presentacion</Link>
      </Button>
      <Button ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        className={classes.menu}
        onClick={handleToggle}>
        Productos
      </Button>
      <Button className={classes.menu}>
        <Link to="/productos" className={classes.link}>Cotizar</Link>
      </Button>
      <Button className={classes.menu}>
        <Link to="/tutoriales" className={classes.link}>Tutoriales</Link>
      </Button>  
      <ProductosPopper 
        open={open}
        menu={anchorRef}
        close={handleClose}
        key={handleListKeyDown}
      />
    </div>
  );
}
