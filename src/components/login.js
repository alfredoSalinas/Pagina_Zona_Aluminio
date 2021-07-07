import React, {Component} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Avatar } from '@material-ui/core'

class Login extends Component{
	constructor(){
		super()
		this.state = {
			user : null
		}
		this.handleAuth = this.handleAuth.bind(this)
		this.handleLogout = this.handleLogout.bind(this)
		this.renderLoginButton = this.renderLoginButton.bind(this)
	}

	/*
	componentWillUnmount(){
		firebase.auth().onAuthStateChanged(user =>{
			this.setState({user})
		})
	}
*/
	handleLogout(){
		firebase.auth().signOut()
	}

	handleAuth(){
		const provider = new firebase.auth.GoogleAuthProvider()
		firebase.auth().signInWithPopup(provider)
			.then(result => console.log(result.user.email))
		firebase.auth().onAuthStateChanged(user =>{
			this.setState({user})
		})
		console.log(this.state)
	}

	getUsuario(){
		console.log('Obteniendo usuario')
		firebase.auth()
		.getRedirectResult()
		.then((result)=>{
			if(result.credential){
				var credential = result.credential
				var token = credential.accessToken
			}
			var user = result.user
			console.log('el usuario es : ',user, token)	
		}).catch((error) => {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
			console.log(errorMessage)
		  });
		
	}

	renderLoginButton(){
		if(this.state.user){
			console.log(this.state.email)
			return(
				<div>
					<Avatar src={this.state.user.photoURL}/>
					<p>Usuario : {this.state.user.email}</p>
					<button onClick={this.handleLogout}>Salir</button>
				</div>
			)
		}else{
			console.log(this.state)
			return(
			<button onClick={this.handleAuth}>Login</button>
			)
		}
	}

	render(){
	return(
		<div>
			<h2>{this.state.email}</h2>
			<button onClick={this.getUsuario()}>Usuario</button>
			<p>{this.renderLoginButton()}</p>	
		</div>
		)
			
}}

export default Login