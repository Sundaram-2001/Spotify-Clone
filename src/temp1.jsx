import React from "react"
// import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faCrown, faHeadphones, faHeart, faHouse, faIcons, faMusic, faPeace, faPlus, faPlusCircle, faRankingStar, faSearch, faThumbTack } from '@fortawesome/free-solid-svg-icons';
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
    const handleClick=()=>{
        alert("Kindly Log-In to Stream ad-free music!")
    }
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="second-container">
            <ul style={{listStyle:'none',padding:'0'}}>
                <li className="library">
                        <span><FontAwesomeIcon icon={faNapster}/></span>{' '}{' '}
                            <a href="/" className="library-link" style={{"textDecoration":"none","color":"white",
                                "borderRadius":"20px"}}>
                                    <span>
                                        Your Library
                                    </span>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            <a href="/">
                                {/*<button className="plus-button">*/}
                                    <FontAwesomeIcon  className="plus-icon" style={{"color":"white"}}
                                        icon={faPlus}/>
                                {/*</button>*/}
                            </a>
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            <a href="/">
                                {/*<button className="plus-button">*/}
                                    <FontAwesomeIcon  className="plus-icon" style={{"color":"white"}}
                                        icon={faArrowRight}/>
                                {/*</button>*/}
                            </a>
                        </span>
                </li>
                <div style={{"marginTop":"40px"}}>
                    <button className="playlist-button">Playlists</button>
                    &nbsp;&nbsp;&nbsp;
                    <button className="album-button">Albums</button>
                    &nbsp;&nbsp;&nbsp;
                    <button className="artist-button">Artists</button>
                </div>
                </ul>
                <button className="search-button">
                    <FontAwesomeIcon className="search-icon" style={{"margin-top": "0px"}} icon={faSearch} />
                </button>
                <a className="recently-played">
                    Recents 
                    &nbsp;<FontAwesomeIcon icon={faBars} />
                </a>
                <button className="liked-songs"
                onClick={handleClick}
      style={{
        width: 300,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        "marginTop":20,
        borderRadius: 5,
        position: 'relative'
    }}
    >
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faHeart} size="lg" style={{ "color": "violet", height: '100%', position: 'absolute' }} />
        <h5 style={{ color: '#fff', margin: 0, marginLeft: 55, marginTop: -30 }}>Liked Songs</h5>
        </div>
        <div style={{ position: 'absolute', marginBottom: 5 }}>
    <FontAwesomeIcon className="pin-icon" icon={faThumbTack} size="sm" style={{ "color":"#1DB954", 
    position: 'absolute', bottom: 25, left: 50 }} />
    <span><h6 style={{"color":"white", marginLeft: 70,marginTop: 50}}>271 songs</h6></span>
    </div>
</button>
<button className="liked-songs"
onClick={handleClick}
      style={{
        width: 300,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        "marginTop":20,
        borderRadius: 5,
        position: 'relative'
    }}
    >
        <div style={{ display: 'flex', alignItems: 'center' }}>
        {<FontAwesomeIcon icon={faMusic} size="lg" style={{"color":"white", height: '100%', position: 'absolute' }} />}
        
        <h5 style={{ color: '#fff', margin: 0, marginLeft: 55, marginTop: -30 }}>Honey Singh</h5>
        </div>
        <div style={{ position: 'absolute', marginBottom: 5 }}>
        <span><h6 style={{"color":"white", marginLeft: 50,marginTop: 60}}>pranshu</h6></span>
    </div>
</button>
<button className="liked-songs"
onClick={handleClick}
      style={{
        width: 300,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        "marginTop":20,
        borderRadius: 5,
        position: 'relative'
    }}
    >
        <div style={{ display: 'flex', alignItems: 'center' }}>
        {<FontAwesomeIcon icon={faHeadphones} size="lg" style={{"color":"white", height: '100%', position: 'absolute' }} />}
        
        <h5 style={{ color: '#fff', margin: 0, marginLeft: 55, marginTop: -30 }}>That Music Project</h5>
        </div>
        <div style={{ position: 'absolute', marginBottom: 5 }}>
        <span><h6 style={{"color":"white", marginLeft: 50,marginTop: 60}}>That Music Project</h6></span>
    </div>
</button>
<button className="liked-songs"
    onClick={handleClick}
      style={{
        width: 300,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        "marginTop":20,
        borderRadius: 5,
        position: 'relative'
    }}
    >
        <div style={{ display: 'flex', alignItems: 'center' }}>
        {<FontAwesomeIcon icon={faCrown} size="lg" style={{"color":"white", height: '100%', position: 'absolute' }} />}
        
        <h5 style={{ color: '#fff', margin: 0, marginLeft: 55, marginTop: -30 }}>Taylor Swift</h5>
        </div>
        <div style={{ position: 'absolute', marginBottom: 5 }}>
        <span><h6 style={{"color":"white", marginLeft: 50,marginTop: 60}}>Spotify</h6></span>
    </div>
</button>
</div>
</>
    )
}