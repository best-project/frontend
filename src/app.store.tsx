import { Store, createStore, compose, applyMiddleware } from 'redux';
import appReducer from './app.reducer';
import thunk from "redux-thunk";

const initialState = {}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store = createStore(
  appReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
);
export default store;