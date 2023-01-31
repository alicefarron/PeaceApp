import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  affirmations: string[];
}

const initialState: State = {
  affirmations: [],
};

const affirmationsSlice = createSlice({
  name: 'affirmations',
  initialState,
  reducers: {
    addAffirmation: (state, action: PayloadAction<string>) => {
      state.affirmations.push(action.payload);
    },
    removeAffirmation: (state, action: PayloadAction<string>) => {
      state.affirmations = state.affirmations.filter(affirmation => affirmation !== action.payload);
    },
  },
});

export const { reducer } = affirmationsSlice;