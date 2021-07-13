import React from 'react'
import { Container } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Facebook from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp'
import Email from '@material-ui/icons/Email';
import aluminio from '../images/tipos-de-aluminio.jpg'
//import { salir } from '../services/firebase'

const ContentMain = ()=> {
    return (
        <div>
        <Fab 
            size="small"
            aria-label="add"
            color= 'primary' 
            style={{  
                marginTop: 250, 
                position: 'fixed',
            }} 
        >
        <Facebook />
        </Fab>
        <Fab size="small" aria-label="add" style={{marginTop: 300, position: 'fixed'}} >
            <WhatsApp />
        </Fab>
        <Fab size="small" aria-label="add" style={{marginTop: 350, position: 'fixed'}} >
            <Email />
        </Fab>
        <img src={aluminio} width="100%" alt="aluminio" style={{marginTop: 70}}  />
        </div>
    )
}

export default ContentMain