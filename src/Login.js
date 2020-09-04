import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import {auth,provider}  from "./firebase";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {
       //clever sign in ...

    const [state,dispatch]=useStateValue();
    const signIn= ()=> {
     
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
           
        })
        .catch(error => alert(error.message)) ;
    };
    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="" />           
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="fb in letters"/>

            </div>
        <Button type="submit" onClick={signIn}>Sign In</Button>
         </div>
    )
}

export default Login
