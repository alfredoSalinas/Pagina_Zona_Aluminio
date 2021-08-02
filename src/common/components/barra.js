import React from 'react'
import barra from '../../assets/portada/BARRA1.png'
import Colors from '../styles/colors'

const Barra = ({categoria, grupo})=>{
  return (
    <div style={{backgroundImage: `url(${barra})`, backgroundSize: 'cover'}} >
      <p style={{marginLeft: 50, paddingTop: 15, color: 'white', fontFamily: "mentone", fontSize: 20}}>
        {categoria}
      </p>
      <p style={{marginLeft: 50, marginTop:-20, color: Colors.primary,fontFamily: "mentone", fontSize: 30 }}>
        <b>{grupo}</b>
      </p>
    </div>
  )
}

export default Barra