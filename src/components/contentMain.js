import React from 'react'
import { Container } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Facebook from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp'
import Email from '@material-ui/icons/Email';
import aluminio from '../images/tipos-de-aluminio.jpg'
import portada from '../assets/portada/portada.jpg'
import portada2 from '../assets/portada/portada2.jpg'
import Galeria from './galeria';
import ContentCards from './contentCards';
import HerrajesCards from '../common/components/herrajesCards';
import ImageCarousel from './galeria2'
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