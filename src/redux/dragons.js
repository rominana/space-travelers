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
  reducers: {
    reserveDragon: {
      reducer: (state, action) => state.map((e) => (
        e.dragonsId === action.payload ? { ...e, dragonReserved: true } : e)),
      prepare: (dragonsId) => ({
        payload: dragonsId,
      }),
    },
    cancelDragonReserve: {
      reducer: (state, action) => state.map((e) => (
        e.dragonsId === action.payload ? { ...e, dragonReserved: false } : e)),
      prepare: (dragonsId) => ({
        payload: dragonsId,
      }),
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDragons.fulfilled, (state, action) => action.payload.map((dragon) => ({
      dragonsId: dragon.id,
      type: dragon.type,
      name: dragon.name,
      flickrImages0: dragon.flickr_images[0],
      description: dragon.description,
      dragonReserved: false,
    })));
  },
});

export const { reserveDragon, cancelDragonReserve } = dragonsReducer.actions;
