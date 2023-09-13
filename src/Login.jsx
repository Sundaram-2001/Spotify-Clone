import React from "react";
import './Login.css'
import spotify from './ss/spotify.jpeg'
import SignInWithGoogle from './SignInWithGoogleButton'


export default function Login(){
    return(
        <div className="login">
            <img src={spotify} alt="logo" />
            <button>Sign in with Spotify</button>
            
        </div>
    )
}