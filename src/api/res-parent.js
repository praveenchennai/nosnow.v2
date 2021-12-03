import { combineReducers } from 'redux'
import resSF from './res';
import resR from './res-results';

const resReducer = combineReducers({
    resSF: resSF,
    resR: resR,
})