import { configureStore } from '@reduxjs/toolkit';
import missions from './missions';
import rockets from './rockets';
import dragons from './dragons';

const store = configureStore({
  reducer: {
    missions: missions.reducer,
    rockets: rockets.reducer,
    dragons: dragons.reducer,
  },
});

export default store;
