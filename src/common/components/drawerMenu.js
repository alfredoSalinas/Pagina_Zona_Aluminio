import React from 'react'
import { Avatar, Button, List, ListItem, ListItemText, MenuItem } from '@material-ui/core'
import {
  Link
} from "react-router-dom";
import MenuPopperAluminio from './menuPopperAluminio';

const DrawerMenu = ({ drawerClose })=>{
  return (
    <div>
      <List>
          <ListItem>
          <Link to="/" 
            style={{textDecoration: 'none', color: 'inherit'}}
            onClick={drawerClose}>
            Presentacion
          </Link>
          </ListItem>
          <List>
            <ListItem>
            <details>
              <summary>Productos</summary>
              <ListItem>
              <details>
                <summary>Perfiles de Aluminio</summary>
                <List>
                <MenuItem >
                  <Link to="/linea12" onClick={drawerClose} style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 12
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="/linea20" onClick={drawerClose} style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 20
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="/linea25" onClick={drawerClose} style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 25
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="/linea32" onClick={drawerClose} style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 32
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="/linea35" onClick={drawerClose} style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 35
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="/linea42" onClick={drawerClose} style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 42
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="/linea4000" onClick={drawerClose} style={{textDecoration: 'none', color: 'inherit'}}>
                    Linea 4000
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="/tubos" onClick={drawerClose} style={{textDecoration: 'none', color: 'inherit'}}>
                    Tubos
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="/templado" onClick={drawerClose} style={{textDecoration: 'none', color: 'inherit'}}>
                    Vidrio Templado
                  </Link>
                </MenuItem>
                </List>
              </details>
              </ListItem>
              <ListItem>
                <Link to="/quincalleria" 
                style={{textDecoration: 'none', color: 'inherit'}}
                onClick={drawerClose}>
                  Quincalleria
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/jaladores" 
                style={{textDecoration: 'none', color: 'inherit'}}
                onClick={drawerClose}>
                  Jaladores
                </Link>
              </ListItem>
              <ListItem>
              <details>
                <summary>Vidrio templado</summary>
                  <List>
                    <ListItem>
                      <Link to="/kits" 
                      style={{textDecoration: 'none', color: 'inherit'}}
                      onClick={drawerClose}>
                      Kits
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/herrajes" 
                      style={{textDecoration: 'none', color: 'inherit'}}
                      onClick={drawerClose}>
                      Herrajes correr
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/abatir" 
                      style={{textDecoration: 'none', color: 'inherit'}}
                      onClick={drawerClose}>
                      Herrajes de Abatir
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/basculantes" 
                      style={{textDecoration: 'none', color: 'inherit'}}
                      onClick={drawerClose}>
                      Herrajes Basculantes
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/fijos" 
                      style={{textDecoration: 'none', color: 'inherit'}}
                      onClick={drawerClose}>
                      Herrajes Paños Fijos
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/minis" 
                      style={{textDecoration: 'none', color: 'inherit'}}
                      onClick={drawerClose}>
                      Herrajes Minis
                      </Link>
                    </ListItem>
                  </List>
              </details>
              </ListItem>
              <ListItem>
                <Link to="/barandas" 
                  style={{textDecoration: 'none', color: 'inherit'}}
                  onClick={drawerClose}>
                  Barandas
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/placas" 
                  style={{textDecoration: 'none', color: 'inherit'}}
                  onClick={drawerClose}>
                  Placas
                </Link>
              </ListItem>
            </details>
            </ListItem>
          </List>
          <ListItem>
          <Link to="/productos" 
            style={{textDecoration: 'none', color: 'inherit'}}
            onClick={drawerClose}>
            Cotizar
          </Link>
          </ListItem>
          <ListItem>
          <Link to="/" 
            style={{textDecoration: 'none', color: 'inherit'}}
            onClick={drawerClose}>
            Tutoriales
          </Link>
          </ListItem>
        </List>
    </div>
  )
}

export default DrawerMenu