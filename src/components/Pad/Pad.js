import React, { useEffect, useState, useRef } from 'react'; // import react and Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
import './Pad.css';
import { Howl } from "howler"; // howler.js is an audio library for the modern web.

const Pad = ({src, name, playButton}) => {

    // Declare a new state variable - "statusPad" and initializes it to false - represents the ON/OFF status of pad
    const [statusPad, setStatusPad] = useState(false);

    // Declare a new state variable - "sample" Type of Howler initializes it with initial variables
    const [sample] = useState(new Howl({
        src: `${src}`, //get link of the sample. (hosted in google drive for deploying)
        loop: true, // directive - repeat the loop as long as the pad is on.
        // directive - all playing loops should be synced
        // the concept is - Instead of stop / play, simply mute and unmute
        autoplay: true, 
        mute:true, 
        format: ['mp3'] // for audio type mp3
    }));

    // with a functional component we are using useRef instead of createRef.
    const cardRef = useRef('div'); // holding the div tag of the 'card' className for display/undisplay effects when pad is ON status

    useEffect(() => {
        if (sample.mute(true) && statusPad && playButton) {
            sample.mute(false); //unmute that pad's sample
            addEffects(); // add effects to card
        }
        if (!playButton || !statusPad) {
            sample.mute(true); //mute that pad's sample
            removeEffects(); //remove effects from card
        }
    }, [statusPad,playButton])

    //intended to add effects to the card
    const addEffects = () =>{
        // `current` points to the mounted div (card className) element
        cardRef.current.classList.add("effect");
    }

    //intended to remove effects from the card 
    const removeEffects = () => {
        // `current` points to the mounted div (card className) element
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