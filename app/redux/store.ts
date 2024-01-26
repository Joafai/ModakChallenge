import {configureStore} from '@reduxjs/toolkit';
import artReducer from './slices/ArtSlice';

const store = configureStore({
  reducer: artReducer,
});

export default store;
