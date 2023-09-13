import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function SignInWithGoogle(){
    return(
        <button className="google-button">
            <FontAwesomeIcon icon={faGoogle} /> {` `}
            Sign in with Google
        </button>
    )
}