import React from 'react'
import './player.css'
import {    useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faForwardStep, faPlay, faShuffle, faRepeat } from '@fortawesome/free-solid-svg-icons';
export default function player(){
  const innerButtonClick=(e)=>{
    e.stopPropagation();
  }
    return(
      <div className='player-button'>
        <button className='shuffle-button'>
          <FontAwesomeIcon icon={faShuffle}/>
        </button>
        <button className='prev-button'>
          <FontAwesomeIcon icon={faBackwardStep}/>
        </button>
        <button className='play-button' onClick={innerButtonClick}>
          <FontAwesomeIcon icon={faPlay}/>
        </button>
        <button className='next-button'>
          <FontAwesomeIcon icon={faForwardStep}/>
        </button>
        <button className='repeat-button'>
          <FontAwesomeIcon icon={faRepeat} />
        </button>
      </div>
)
}