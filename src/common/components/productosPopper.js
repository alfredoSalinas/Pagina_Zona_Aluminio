import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const ProductosPopper =({open, menu, close, key, subMenu, subOpen, menuToggle})=>{
    return (
        <Popper open={open} anchorEl={menu.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={close}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={key}>
                    <MenuItem onClick={close}>Perfiles de Aluminio</MenuItem>
                    <MenuItem onClick={close}>Quincalleria</MenuItem>
                    <MenuItem ref={subMenu} aria-controls={subOpen ? 'menu-menu-grow' : undefined}
          aria-haspopup="true" onClick={menuToggle}>Accesosrios de Vidrio Templado
                      <ListItemIcon>
            <ArrowRight fontSize="small" />
          </ListItemIcon>
                    </MenuItem>
                    <MenuItem onClick={close}>Barandas</MenuItem>
                    <MenuItem onClick={close}>Placas</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
      </Popper>
    )
}

export default ProductosPopper