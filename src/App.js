import React, {useRef} from 'react';
import Pads from './components/Pads';
import Controls from './components/Controls';

import './App.css'

function App() {
  const audio = useRef('audio_tag'); // use case for useRef is getting access to DOM nodes. 
  return (
    <div className="App">
      <h1>LOOP MACHINE</h1>
      <audio onChange={(e)=> console.log(e)} ref={audio} type="audio/mpeg"></audio>
      <Pads />
      <Controls />
    </div>
  );
}

export default App;
