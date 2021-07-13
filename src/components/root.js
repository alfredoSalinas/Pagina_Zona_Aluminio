import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Root = (props)=>{
    const isReady = useSelector(state => state.auth.authReady)
    if(!isReady){
        return <div>Loading......</div> 
    }

    return props.children
}

export default Root