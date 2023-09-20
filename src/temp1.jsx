import React from "react"
// import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons';
import './temp1.css'
export default function temp(){
    // const [isHovered,setIsHovered]=useState(false);
    // const handleMouseEnter=()=>{
    //     setIsHovered(true);
    // }
    // const handleMouseLeave=()=>{
    //     setIsHovered(false);
    // }
    return(
        <div className="first-container" style={{"color": "white"}}
            
        >
            <ul style={{ listStyle: 'none', padding: '0'}}>
                    <li className="home-comp">
                        <span><FontAwesomeIcon icon={faHouse}/></span>{' '}
                        <span><a href="/">Home</a></span>
                    </li>
                
                <br />  <br/>
                <li className="search-comp">
                    <span><FontAwesomeIcon icon={faSearch}/></span> {' '}
                    Search
                </li>
            </ul> 
        </div>
    )
}