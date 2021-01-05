import React, { useState } from 'react';
import './Pads.css';
import Pad from '../Pad/Pad';
import {samples} from '../samples';

const Pads = () => {
    const [playButton, setPlayButton] = useState(false);

    return (
        <div className="pads">
            {playButton ?
                    <i className="fas fa-pause text-danger playpause-icons" onClick={()=>setPlayButton(false)}></i>
                :
                    <i className="fas fa-play text-primary playpause-icons" onClick={()=>setPlayButton(true)}></i>
            }
            <div className="grid">
                <div className="row">
                    <div className="col-md-4">
                        <Pad
                            src = {samples[0].audio}
                            name = {samples[0].name}
                            playButton = {playButton}
                        />
                </div> 
                    <div className="col-md-4">
                        <Pad
                            src = {samples[1].audio}
                            name = {samples[1].name}
                            playButton = {playButton}
                        />
                    </div> 
                    <div className="col-md-4">
                        <Pad
                            src = {samples[2].audio}
                            name = {samples[2].name}
                            playButton = {playButton}
                        />
                    </div> 
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Pad
                            src = {samples[3].audio}
                            name = {samples[3].name}
                            playButton = {playButton}
                        />
                    </div> 
                    <div className="col-md-4">
                        <Pad
                            src = {samples[4].audio}
                            name = {samples[4].name}
                            playButton = {playButton}
                        />
                    </div> 
                    <div className="col-md-4">
                        <Pad
                            src = {samples[5].audio}
                            name = {samples[5].name}
                            playButton = {playButton}
                        />
                    </div> 
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Pad
                            src = {samples[6].audio}
                            name = {samples[6].name}
                            playButton = {playButton}
                        />
                    </div> 
                    <div className="col-md-4">
                        <Pad
                            src = {samples[7].audio}
                            name = {samples[7].name}
                            playButton = {playButton}
                        />
                    </div> 
                    <div className="col-md-4">
                        <Pad
                            src = {samples[8].audio}
                            name = {samples[8].name}
                            playButton = {playButton}
                        />
                    </div> 
                </div>
        </div>
    </div>
    );
}

export default Pads;