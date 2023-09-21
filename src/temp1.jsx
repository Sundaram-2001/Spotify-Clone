import React from "react"
// import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIcons, faSearch } from '@fortawesome/free-solid-svg-icons';
import './temp1.css'
import { faNapster } from "@fortawesome/free-brands-svg-icons";
export default function temp(){
    // const [isHovered,setIsHovered]=useState(false);
    // const handleMouseEnter=()=>{
    //     setIsHovered(true);
    // }
    // const handleMouseLeave=()=>{
    //     setIsHovered(false);
    // }
    return(
        <>
        <div className="first-container" style={{"color": "white"}}
            
        >
            <ul style={{ listStyle: 'none', padding: '0'}}>
                    <li className="home-comp">
                    <a href="/" style={{"textDecoration":"none","color":"white","borderRadius":"20px"}}>    
                        <span><FontAwesomeIcon icon={faHouse}/></span>{' '}
                        <span>Home</span>
                    
                    </a>
                    </li>
                
                <br />  <br/>
                <li className="search-comp">
                    <a href="/" style={{"textDecoration":"none","color":"white","borderRadius":"20px"}}>
                    <span><FontAwesomeIcon icon={faSearch}/></span> {' '}
                    <span>Search</span>
                    </a>
                </li>
            </ul> 
        </div>
        <div className="second-container">
            <ul style={{listStyle:'none',padding:'0'}}>
                <li className="library">
                    <span><FontAwesomeIcon icon={faNapster}/></span>{' '}{' '}
                    <span>Your Library</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Hello</span>
                </li>
            </ul>
        </div>
        </>
    )
}