import React, { useState, useEffect, useRef, useContext } from 'react'

function Controls({currentPad}) {
    const [playing,setPlaying] = useState(false);
    const [dur,setDur] = useState(0);
    const [curr,setCurr] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audio = useRef('audio_tag');

    const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }

    const toggle = () =>{
        setDur(audio.current.duration)
        if(audio.current.paused){
          audio.current.play()
        }else{
          audio.current.pause()
        }
    }
    const handleProgress = (e)=>{
        let compute = (e.target.value*dur)/100;
        setCurr(compute);
        audio.current.currentTime= compute;
    }
    // useEffect(()=>{
    //     setDur(audio.current.duration)
    // },[])
 return(
     <div className="controls container">
         <audio 
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onCanPlay = {(e)=> setDur(e.target.duration)}
            ref={audio}
            type="audio/mpeg"
            src={currentPad[1]}
         />
        <div className="music-controlls">
            <span className="play" onClick={()=>{setPlaying(playing?0:1); toggle();}}>
                {
                    playing ? <i className="fas fa-pause"></i>:<i className="fas fa-play"></i>
                }
            </span>
        </div>
        <div className="progress">
            <span className="current-time">{fmtMSS(curr)}</span>
            <input onChange={handleProgress} value={(curr*100)/dur} type="range" name="progresBar" id="progresBar"></input>
            <span className="end-time">{fmtMSS(dur)}</span>
        </div>
        <span className="repeat"><i className="fas fa-redo-alt"></i></span>
     </div>
 )
  
}

export default Controls