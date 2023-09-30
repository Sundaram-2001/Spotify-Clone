import React from 'react'
import './player.css'
import {    useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faForwardStep, faPlay, faShuffle, faRepeat, faHeart, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
export default function player(){
const [isClicked,setIsClicked]=useState(false);
const changeColor=()=>{
    setIsClicked(prevIsClicked=>{
      setIsClicked(!prevIsClicked);
    })
}
const [isShuffled,setIsShuffled]=useState(false);
const changeShuffleColor=()=>{
    setIsShuffled(prevIsShuffled=>{
      setIsShuffled(!prevIsShuffled);
    })
}
const [isLiked,setIsLiked]=useState(false);
const likeSong=()=>{
  setIsLiked(previsLiked=>{
    setIsLiked(!previsLiked);
  })
}
    return(
      <div className='player-button'>
        <button className='shuffle-button' onClick={changeShuffleColor}>
          <FontAwesomeIcon   className={`shuffle-icon ${isShuffled ? 'shuffled' : ' '}`} icon={faShuffle}/>
        </button>
        <button className='prev-button'>
          <FontAwesomeIcon icon={faBackwardStep}/>
        </button>
        <button className='play-button' >
          <FontAwesomeIcon icon={faPlay}/>
        </button>
        <button className='next-button'>
          <FontAwesomeIcon icon={faForwardStep}/>
        </button>
        <button className='repeat-button' onClick={changeColor}>
          <FontAwesomeIcon className={`repeat-icon ${isClicked ? 'clicked' : ' '}`} icon={faRepeat} />
        </button>
        <button className='like-song' onClick={likeSong}>
          <FontAwesomeIcon className={`like-icon ${isLiked ? 'liked' : ' '}`} icon={faHeart}/>
        </button>
      </div>
)
}