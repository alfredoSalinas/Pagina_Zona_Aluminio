import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import {
  Link
} from "react-router-dom";
import { ListItemIcon } from '@material-ui/core';
import ArrowRight from '@material-ui/icons/ArrowRight';

export default function MenuPopperAluminio({close}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <Fragment>
        <MenuItem
          ref={anchorRef}
          aria-controls={open ? 'vidrio-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Perfiles de Aluminio
          <ListItemIcon>
            <ArrowRight fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <Popper open={open} anchorEl={anchorRef.current} placement="right" role={undefined} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'right' ? 'center top' : 'right right' }}>
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="menu-menu-grow" onKeyDown={handleListKeyDown}>
                <MenuItem onClick={handleClose}>
                  <Link to="/linea12" onClick={close} style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 12
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose, close}>
                  <Link to="/linea20" style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 20
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose, close}>
                  <Link to="/linea25" style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 25
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose, close}>
                  <Link to="/linea32" style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 32
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose, close}>
                  <Link to="/linea35" style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 35
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose, close}>
                  <Link to="/linea42" style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 42
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose, close}>
                  <Link to="/linea4000" style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 4000
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose, close}>
                  <Link to="/tubos" style={{textDecoration: 'none', color: 'inherit'}}>
                    Tubos
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose, close}>
                  <Link to="/templado" style={{textDecoration: 'none', color: 'inherit'}}>
                    Vidrio Templado
                  </Link>
                </MenuItem>                    
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
      </Fragment>
  );
}
