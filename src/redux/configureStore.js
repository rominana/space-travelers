import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import missions from './missions';
// import dragons from './dragons';

import rocketsReducer from './RocketSlice';

const store = configureStore({
  reducer: {
    //     missions: missions.reducer,
    //     dragons: dragons.reducer,
    rockets: rocketsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
