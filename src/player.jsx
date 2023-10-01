import React from 'react'
import './player.css'
import {    useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {Song} from './song.png'
import { faBackwardStep, faForwardStep, faPlay, faShuffle, faRepeat, faHeart, faHeartPulse, faPause } from '@fortawesome/free-solid-svg-icons';
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
const [isPlayed,setIsPlayed]=useState(false);
const changeIcon=()=>{
  setIsPlayed(previsPlayed=>{
    setIsPlayed(!previsPlayed);
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
        <button className='play-button' onClick={changeIcon}>
          <FontAwesomeIcon icon={isPlayed ? faPause : faPlay}/>
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
        <div className='song-info'>
        <div className='image-container'>

        </div>
          <h4 className='song-name'>
            Ik Kahani
          </h4>
          &nbsp;
          <h5 className='artist-name'>
            Gajendra Verma
          </h5>
        </div>
      </div>
)
}