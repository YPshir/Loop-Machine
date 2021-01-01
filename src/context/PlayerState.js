import React , {useReducer} from 'react';
import playerContext from './PlayerContetx';
import playerReducer from './PlayerReducer';

import {
    SET_CURRENT_PAD
} from './types';


const PlayerState = props => {
    const initialState = {
        currentPad: 0
    }
    const [state,dispatch] = useReducer(playerReducer,initialState);
    const SetCurrent = id => dispatch({type:SET_CURRENT_PAD,data:id})
    return
     <playerContext.Provider
        value = {{
            currentPad:state.currentPad,
            SetCurrent: SetCurrent
        }}
    >
        {props.children}
    </playerContext.Provider>
}

export default PlayerState;