import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_DRAGONS = 'space-travelers/GET_DRAGONS';

const initialState = [];

export const getDragons = createAsyncThunk(
  GET_DRAGONS,
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/dragons');
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const dragonsReducer = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDragons.fulfilled, (state, action) => action.payload);
  },

});
