import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ArtworkItemRes} from '../../services/artService';

type ArtState = {
  favoArt: Array<ArtworkItemRes>;
};

const initialState: ArtState = {
  favoArt: [],
};

const artSlice = createSlice({
  name: 'favoArt',
  initialState,
  reducers: {
    addArt(state, action: PayloadAction<ArtworkItemRes>) {
      const newArt = action.payload;

      const isArtAlreadyAdded = state.favoArt.some(art => art.id === newArt.id);
      if (!isArtAlreadyAdded) {
        state.favoArt = [...state.favoArt, newArt];
      }
    },
    removeArt(state, action: PayloadAction<string>) {
      const artId = action.payload;
      state.favoArt = state.favoArt.filter(art => art.id !== artId);
    },
  },
});

export const {addArt, removeArt} = artSlice.actions;
export const favoArt = (state: {favoArt: ArtState}) => state.favoArt;
export default artSlice.reducer;
