import React, { useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";

const Record = () => {
    const [recorder] = useState(new MicRecorder({bitRate: 128}));
    const [player,setPlayer] = useState(false);
    const [recording,setRecording] = useState(false);
    const [src,setSrc] = useState("");

    const startRecord = () => {
        // Start recording. Browser will request permission to use your microphone
        recorder.start().
        then(() => {
            recorder.start();
            setRecording(true);
            setPlayer(false);
        }).catch((e) => {
            console.error(e);
        });
    };

    const endRecord = () => {
        // Once you are done singing your best samples, stop and get the mp3.
        recorder.stop()
          .getMp3()
          .then(([buffer, blob]) => {
            setSrc(URL.createObjectURL(blob));
            setRecording(false);
            setPlayer(true);
          }).catch((e)=>{
            alert('We could not retrieve your message');
            console.log(e);
          })
    };

    return (
        <div className="records">
            <button className="btn btn-primary" onClick={()=>{startRecord()}} disabled={recording||player}>
                    Start Record
            </button>
            <button className="btn btn-danger" onClick={()=>{endRecord()}} disabled={!recording} >
                    End Record
            </button>
          {player?
                <>
                    <audio controls src={src}/>
                    <i className="fas fa-trash-alt text-danger" onClick={()=>{setPlayer(false);}} style={{ fontSize:"3em",cursor:"pointer"}}></i>
                </>
            :
                <></>
          }
      </div>
    )
}

export default Record;