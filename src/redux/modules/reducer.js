import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import {reducer as form} from 'redux-form';
import candidateReducer from '../../containers/MainPage/candidateReducer';

export default combineReducers({
  router: routerStateReducer,
  form,
  candidateReducer
});
