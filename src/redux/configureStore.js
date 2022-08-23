import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './RocketSlice';
import misssionsReducer from './missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: misssionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
