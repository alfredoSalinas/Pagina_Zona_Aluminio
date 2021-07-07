import React from 'react'
import { Container } from '@material-ui/core';
import aluminio from '../images/tipos-de-aluminio.jpg'

const ContentMain = ()=> {
    return (
        <Container style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 70}}>
            <img src={aluminio} width="100%" alt="aluminio"  />
        </Container>
    )
}

export default ContentMain