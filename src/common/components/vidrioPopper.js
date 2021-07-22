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


const VidrioPopper =({open, menu, close, key})=>{
    return (
        <Popper open={open} anchorEl={menu.current} placement="right" role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
            <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'right' ? 'center top' : 'right right' }}
            >
                <Paper>
                    <ClickAwayListener onClickAway={close}>
                        <MenuList autoFocusItem={open} id="menu-menu-grow" onKeyDown={key}>
                            <MenuItem onClick={close}>
                                <Link to="/kits" style={{textDecoration: 'none', color: 'inherit'}}>
                                    Kits
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={close}>
                                <Link to="/herrajes" style={{textDecoration: 'none', color: 'inherit'}}>
                                    Herraje de correr
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

export default VidrioPopper