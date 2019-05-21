import { combineReducers } from 'redux';
import text from './text';
import count from './count';

export default combineReducers({
    text,
    count
});