import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missions from './missions';
import rockets from './rockets';
import { dragonsReducer } from './dragons';

const store = configureStore({
  reducer: {
    missions: missions.reducer,
    rockets: rockets.reducer,
    dragons: dragonsReducer.reducer,
  },
}, applyMiddleware(thunk));

export default store;
