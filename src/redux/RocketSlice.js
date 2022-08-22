import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
// Fetch data from the Rockets endpoint
const rocketsApi = 'https://api.spacexdata.com/v3/rockets';

// Async Action Creators
export const fetchRocketsApi = createAsyncThunk(
  'rockets/fetchRocketsApi',
  async () => {
    const response = await axios.get(rocketsApi);
    return response.data;
  },
);

// Slice Reducer
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    // Implement rocket booking
    reserveRocket: {
      reducer: (state, action) => state.map((el) => (
        el.rocketId === action.payload ? { ...el, rocketReserved: true } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
    // Implement rocket booking cancelation
    cancelRocket: {
      reducer: (state, action) => state.map((el) => (
        el.rocketId === action.payload ? { ...el, rocketReserved: false } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
  },

  extraReducers: {
    [fetchRocketsApi.fulfilled]: (state, action) => {
      const rockets = action.payload.map((el) => ({
        rocketId: el.rocket_id,
        rocketName: el.rocket_name,
        rocketDesc: el.description,
        rocketImg: el.flickr_images[0],
      }));
      return rockets;
    },
  },
});

export const { reserveRocket, cancelRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
