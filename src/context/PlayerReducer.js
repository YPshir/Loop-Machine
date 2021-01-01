import {SET_CURRENT_PAD} from './types';

export default (state,action) => {
    switch(action.type){
        case SET_CURRENT_PAD:
            return{
                ...state,
                currentPad:action.data
            }
    }
}