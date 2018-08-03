import { combineReducers } from 'redux';
import ContactReducer from './contact-reducer';
import { reducer as formReducer } from 'redux-form';

//Combine all reducers
const reducers = {
  contactStore: ContactReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;