import React from "react";
import './Login.css'
import spotify from './ss/spotify.jpeg'

import { loginUrl } from "./spotify";



export default function Login(){
    function redirectToURL(){
        window.location.href = loginUrl;
    }
    return(
        <div className="login">
            <img src={spotify} alt="logo" />
            <a href={loginUrl} onChange={redirectToURL}>Sign In with Spotify</a>
            <h4 style={{color:"white"}}>OR</h4>
            <a >Skip this for now</a>
        </div>
    )
}