import React , {useReducer} from 'react';
import playerContext from './PlayerContetxt';
import playerReducer from './PlayerReducer';
import {samplesList} from './samples'

import {
    SET_CURRENT_PAD,
    TOGGLR_REPEAT,
    TOGGLE_PLAYING
} from './types';


const PlayerState = (props) => {
    const initialState = {
        currentPad: 0,
        samples:samplesList,
        repeat:false,
        playing:false,
        audio:null
    }
    const [state,dispatch] = useReducer(playerReducer,initialState);
    const togglePlaying = ()=> dispatch({type:TOGGLE_PLAYING,data:state.playing ? false:true})
    const SetCurrent = id => dispatch({type:SET_CURRENT_PAD,data:id})
    // Next song
    const nextSong = () => {
        if (state.currentPad === state.samples.length - 1) {
        SetCurrent(0)
        } else {
        SetCurrent(state.currentPad + 1)
    }
    }
    const toggleRepeat = (id) => dispatch({type:TOGGLR_REPEAT,data:state.repeat?false:true})
      // End of Song
    const handleEnd = () => {
        if (state.repeat) {
            nextSong()
        } else if ((state.currentPad === state.samples.length - 1)) {
            return
        } else {
            nextSong();
        }
    }

    return (
     <playerContext.Provider
        value = {{
            currentPad:state.currentPad,
            samples: state.samples,
            repeat:state.repeat,
            playing:state.playing,
            audio:state.audio,
            nextSong,
            SetCurrent,
            toggleRepeat,
            togglePlaying,
            handleEnd
        }}>
        {props.children}
    </playerContext.Provider>
    )
}

export default PlayerState;