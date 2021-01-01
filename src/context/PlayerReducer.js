import {SET_CURRENT_PAD, TOGGLE_PLAYING, TOGGLR_REPEAT} from './types';

export default (state,action) => {
    switch(action.type){
        case SET_CURRENT_PAD:
            return{
                ...state,
                currentPad:action.data,
                playing: true
            }
        case TOGGLR_REPEAT:
            return{
                ...state,
                repeat: action.data
            }
        case TOGGLE_PLAYING:
            return{
                ...state,
                playing:action.data
            }
        default:
            return state
    }
}