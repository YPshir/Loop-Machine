import React from 'react';
import './App.css';
import Pads from '../src/components/Pads/Pads';
import Record from '../src/components/Record/Record'

const App = () => {
  return (
    <div className='App'>
      <h1><i className="fas fa-infinity"></i>Loop machine<i className="fas fa-infinity"></i></h1>
      <div className="container">
            <Pads />
            <div className="record" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Record />
            </div>
        </div>
    </div>
  );
}

export default App;