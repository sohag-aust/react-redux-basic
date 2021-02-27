import {combineReducers} from 'redux';
import cardItems from './reducer';

export default combineReducers({
    cardItems // merge reducer to rootReducer
});