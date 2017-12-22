import * as types from './../constants/ActiveTypes';

var initialState ='';

var myReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.SEARCH:
        console.log(state);
            return action.keyword;
        default:
            return state;
    }
    
}

export default myReducer;