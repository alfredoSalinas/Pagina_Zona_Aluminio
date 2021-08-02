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
import MenuPopperVidrio from './menuPopperVidrio';
import MenuPopperAluminio from './menuPopperAluminio';


const ProductosPopper = ({ open, menu, close, key }) => {
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
                <MenuPopperAluminio close={close} />
                <MenuItem onClick={close}>
                  <Link to="/quincalleria" style={{ textDecoration: 'none', color: 'inherit' }} >
                    Quincalleria
                  </Link>
                </MenuItem>
                <MenuItem onClick={close}>
                  <Link to="/jaladores" style={{ textDecoration: 'none', color: 'inherit' }} >
                    Jaladores
                  </Link>
                </MenuItem>
                <MenuPopperVidrio close={close} />
                <MenuItem onClick={close}>
                <Link to="/barandas" style={{ textDecoration: 'none', color: 'inherit' }} >
                    Barandas
                  </Link>
                </MenuItem>
                <MenuItem onClick={close}>
                <Link to="/placas" style={{ textDecoration: 'none', color: 'inherit' }} >
                    Placas
                  </Link>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}

export default ProductosPopper