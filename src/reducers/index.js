import {combineReducers} from 'redux';
import authors from './authorReducer';
import courses from './courseReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  authors,
  courses,
  numAjaxCallsInProgress
});

export default rootReducer;
