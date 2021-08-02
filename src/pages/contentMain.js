import React from 'react'
import Fab from '@material-ui/core/Fab';
import Facebook from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp'
import Email from '@material-ui/icons/Email';
import portada from '../assets/portada/portada.jpg'
import portada2 from '../assets/portada/PORTADA 3.1.png' 
import portada3 from '../assets/portada/portada2.jpg'
import banner from '../assets/portada/BANNER.png'
import Colors from '../common/styles/colors';

//import { salir } from '../services/firebase'

const ContentMain = ()=> {
  return (
    <div >
      <img src={portada} width="100%" alt="aluminio" style={{marginTop: 70}}  />
      <img src={portada2} width="100%" alt="aluminio" style={{marginTop: 10}}  />
      <img src={portada3} width="100%" alt="aluminio" style={{marginTop: 10}}  />
      
      <div style={{backgroundColor: Colors.primary}}>
        <Fab size="small" aria-label="add" >
          <Facebook />
        </Fab>
        <Fab size="small" aria-label="add" >
          <WhatsApp />
        </Fab>
        <Fab size="small" aria-label="add" >
          <Email />
        </Fab>
      </div>
    </div>
  )
}

export default ContentMain