import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import trunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    combineReducers({...reducers}), 
    composeEnhancers(applyMiddleware(trunk)));
  return store;
}
