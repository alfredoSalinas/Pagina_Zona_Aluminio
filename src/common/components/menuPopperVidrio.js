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

export default function MenuPopperVidrio({close}) {
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
          Accesosrios de Vidrio Templado
          <ListItemIcon>
            <ArrowRight fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <Popper open={open} anchorEl={anchorRef.current} placement="right" role={undefined} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'right' ? 'top bottom' : 'right right' }}>
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="menu-menu-grow" onKeyDown={handleListKeyDown}>
                <MenuItem onClick={handleClose, close}>
                  <Link to="/kits" style={{textDecoration: 'none', color: 'inherit'}}>
                    Kits
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/herrajes" style={{textDecoration: 'none', color: 'inherit'}}>
                    Herraje de correr
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/abatir" style={{textDecoration: 'none', color: 'inherit'}}>
                    Herraje de Abatir
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/basculantes" style={{textDecoration: 'none', color: 'inherit'}}>
                    Herraje basculantes
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/fijos" style={{textDecoration: 'none', color: 'inherit'}}>
                    Herraje Paños Fijos
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/minis" style={{textDecoration: 'none', color: 'inherit'}}>
                    Herraje Minis
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
