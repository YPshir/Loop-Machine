import React, { useState, useEffect, useRef, useContext } from 'react'

function Controls({toggle}) {
    const [playing,setPlaying] = useState(false);
 return(
     <div className="controls container">
        <div className="music-controlls">
            <span className="play" onClick={()=>{setPlaying(playing?0:1); toggle();}}>
                {
                    playing? <i className="fas fa-pause"></i>:<i className="fas fa-play"></i>
                }
            </span>
        </div>
        <div className="progress">
            <span className="current-time">1:30</span>
            <input type="range" name="progresBar" id="progresBar"></input>
            <span className="end-time">3:19</span>
        </div>
        <span className="repeat"><i className="fas fa-redo-alt"></i></span>
     </div>
 )
  
}

export default Controls