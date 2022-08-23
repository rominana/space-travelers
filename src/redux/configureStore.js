import { configureStore } from '@reduxjs/toolkit';
import misssionsReducer from './missions';
import rockets from './rockets';
import dragons from './dragons';

const store = configureStore({
  reducer: {
    missions: misssionsReducer,
    rockets: rockets.reducer,
    dragons: dragons.reducer,
  },
});

export default store;
