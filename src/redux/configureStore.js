import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './RocketSlice';
import misssionsReducer from './missions';
import { dragonsReducer } from './dragons';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: misssionsReducer,
    dragons: dragonsReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
