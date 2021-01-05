import React, { useEffect, useState, useRef } from 'react';
import './Pad.css';
import { Howl } from "howler";

const Pad = ({src, name, playButton}) => {
    const soundSettings = {
        src: `${src}`,
        loop: true,
        autoplay: true,
        mute:true,
        format: ['mp3']
    }

    const [statusPad, setStatusPad] = useState(false);
    const [sample] = useState(new Howl(soundSettings));

    const cardRef = useRef('div');

    useEffect(() => {
        if (sample.mute(true) && statusPad && playButton ) {
            sample.mute(false);
            effect();
        }
        if (!playButton || !statusPad) {
            sample.mute(true);
            removeEffect();  
        }
    }, [statusPad,playButton])

    const effect = () =>{
        cardRef.current.classList.add("effect");
    }
    const removeEffect = () => {
        cardRef.current.classList.remove("effect");
    }

    return (
        <div className="card" ref={cardRef}>
            <div className="card-body">
                <div className="card-title text-truncate">
                    <i className="fas fa-music"></i>{name}<i className="fas fa-music"></i>
                </div>
                    {statusPad ?
                        <button className="btn btn-warning" onClick={()=>{setStatusPad(false)}}>ON</button>
                        :
                        <button className="btn btn-dark" onClick={()=>{setStatusPad(true)}}>OFF</button>
                    }
            </div>
        </div>
    );
}

export default Pad;