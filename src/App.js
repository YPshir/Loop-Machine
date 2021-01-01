import React, {useState} from 'react';
import Pads from './components/Pads';
import Controls from './components/Controls';
import PlayerState from './context/PlayerState';

import './App.css'

function App() {
  const [currentPad,setCurrentPad] = useState('');
  return (
    <div className="App">
      <PlayerState>
        <h1>LOOP MACHINE</h1>
        {/* <audio onChange={(e)=> console.log(e)} ref={audio} type="audio/mpeg"></audio> */}
        <Pads setCurrentPad={setCurrentPad} />
        <Controls currentPad={currentPad} />
      </PlayerState>
    </div>
  );
}

export default App;
