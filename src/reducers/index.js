import { combineReducers } from 'redux';
import product from './product';
import selected from './selected';
export default combineReducers({ product, selected });
