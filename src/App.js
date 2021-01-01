import React from 'react';
import Pads from './components/Pads';
import Controls from './components/Controls';
import PlayerState from './context/PlayerState';

import './App.css'

function App() {
  return (
    <PlayerState>
      <div className="App">
          <h1>LOOP MACHINE</h1>
          {/* <audio onChange={(e)=> console.log(e)} ref={audio} type="audio/mpeg"></audio> */}
          <Pads />
          <Controls />
      </div>
    </PlayerState>
  );
}

export default App;
