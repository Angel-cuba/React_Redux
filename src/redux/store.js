import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer, { initialState } from './reducers/UserReducers';

const rootReducer = combineReducers({
  users: userReducer,
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
