import { combineReducers } from 'redux';
import fieldsReducer from './fieldsReducer';

const appReducer = combineReducers({
  fields: fieldsReducer
});


const rootReducer = (state, action) => {
  return appReducer(state, action)
};


export default rootReducer;