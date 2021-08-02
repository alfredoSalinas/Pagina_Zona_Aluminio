import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Root = (props)=>{
    const isReady = useSelector(state => state.auth.authReady)
    if(false){
        return <div>Loading......</div> 
    }

    return props.children
}

export default Root