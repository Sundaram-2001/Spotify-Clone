import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons';
import './temp.css'
export default function temp(){
    return(
        <div className="main-container" style={{"color": "white"}}>
            <ul style={{ listStyle: 'none', padding: '0'}}>
                <li>
                    <span><FontAwesomeIcon icon={faHouse}/></span>
                    Home
                </li>
            </ul> 
        </div>
    )
}