import React from 'react'
import Fab from '@material-ui/core/Fab';
import Facebook from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp'
import Email from '@material-ui/icons/Email';
import portada from '../assets/portada/portada.jpg'
import portada2 from '../assets/portada/portada2.jpg'

//import { salir } from '../services/firebase'

const ContentMain = ()=> {
    return (
        <div >
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
        <img src={portada} width="100%" alt="aluminio" style={{marginTop: 70}}  />
        <img src={portada2} width="100%" alt="aluminio" style={{marginTop: 10}}  />
        </div>
    )
}

export default ContentMain