import React from 'react';
import './App.css';
import Pads from '../src/components/Pads/Pads';

const App = () => {
  return (
    <div className='App'>
      <h1><i className="fas fa-infinity"></i>Loop machine<i className="fas fa-infinity"></i></h1>
      <div className="container">
            <Pads />
        </div>
    </div>
  );
}

export default App;