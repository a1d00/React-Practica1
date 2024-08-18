import {combineReducers} from 'redux';

import defaultReducer from './default/defarultReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
});

export default rootReducer;