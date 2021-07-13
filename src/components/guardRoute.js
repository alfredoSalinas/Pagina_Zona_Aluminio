import React from 'react';
import {
  Route, Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const GuardRoute = (props)=>{
  const isSignin = useSelector(state=>state.auth.isSignin)
  const authReady = useSelector(state=>state.auth.authReady)

  if(props.type === 'private' && !isSignin){
    return <Redirect to='/' />
  }else if(props.type === 'public' && !isSignin){
    return <Redirect to='/' />
  }

  return <Route {...props}/>
}

export default GuardRoute
