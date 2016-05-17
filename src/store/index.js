import { createStore } from 'redux';
import subjectReducer from './subject/reducer';

export default createStore(subjectReducer);
