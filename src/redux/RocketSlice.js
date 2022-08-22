import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

// Async Action Creators
export const fetchRocketsApi = createAsyncThunk(
  'rockets/fetchRocketsApi',
  async () => {
    const response = await axios.get(rocketsUrl);
    return response.data;
  },
);

// Slice Reducer
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: {
      reducer: (state, action) => state.map((el) => (
        el.rocketId === action.payload ? { ...el, rocketReserved: true } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
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
