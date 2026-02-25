import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import doctorReducer from './reducers/doctorReducer';
import patientReducer from './reducers/patientReducer';

const topluReducer = combineReducers({
  // reducers burada toplanır
  doctorReducer: doctorReducer,
  patientReducer: patientReducer,
});

export const store = createStore(topluReducer, composeWithDevTools());
