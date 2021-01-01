import React, {useRef} from 'react';
import Pads from './components/Pads';
import Controls from './components/Controls';

import './App.css'

function App() {
  const audio = useRef('audio_tag'); // use case for useRef is getting access to DOM nodes. 
  const toggle = () =>{
    if(audio.current.paused){
      audio.current.play()
    }else{
      audio.current.pause()
    }
  }
  return (
    <div className="App">
      <h1>LOOP MACHINE</h1>
      <Pads />
      <Controls toggle={toggle} />
    </div>
  );
}

export default App;
