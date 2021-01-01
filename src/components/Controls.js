import React, { useState, useRef, useContext, useEffect} from 'react';
import playerContext from '../context/PlayerContetxt';

function Controls() {
    const {currentPad, samples,repeat,playing,toggleRepeat,togglePlaying,handleEnd,nextSong} = useContext(playerContext);
    const audio = useRef('audio_tag');
    // const [playing,setPlaying] = useState(false);
    const [dur,setDur] = useState(0);
    // const [curr,setCurr] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }
    const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();

    // const toggle = () =>{
    //     setDur(audio.current.duration)
    //     if(audio.current.paused){
    //       audio.current.play()
    //     }else{
    //       audio.current.pause()
    //     }
    // }
    const handleProgress = (e)=>{
        let compute = (e.target.value*dur)/100;
        setCurrentTime(compute);
        audio.current.currentTime= compute;
    }
    useEffect(() => {
        if (playing) { toggleAudio() }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentPad])
 return(
     <div className="controls container">
         <audio 
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onCanPlay = {(e)=> setDur(e.target.duration)}
            onEnded = {handleEnd}
            ref={audio}
            preload='true'
            type="audio/mp3"
            src={samples[currentPad][1]}
         />
        <div className="music-controlls">
            <span className="play" onClick={()=>{togglePlaying(); toggleAudio();}}>
                <span className={!playing ? '' : 'hide'}><i className="fas fa-play"></i></span>
                <span className={!playing ? 'hide' : ''}><i className="fas fa-pause"></i></span>
            </span>
        </div>
        <div className="progress">
            <span className="current-time">{fmtMSS(currentTime)}</span>
            <input onChange={handleProgress} value={dur? (currentTime*100)/dur :0} type="range" name="progresBar" id="progresBar"></input>
            <span className="end-time">{fmtMSS(dur)}</span>
        </div>
        <span className="repeat" onClick={toggleRepeat} className={"repeat " + (repeat ? 'active' : '')}>
            <i className="fas fa-redo-alt"></i>
        </span>
     </div>
 )
  
}

export default Controls