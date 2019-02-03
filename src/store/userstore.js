import { createStore, combineReducers } from 'redux';
import { ClientReducer } from '../reducer';
// const rootReducer = combineReducers({UserReducer,LoginReducer});
export const store = createStore(ClientReducer);