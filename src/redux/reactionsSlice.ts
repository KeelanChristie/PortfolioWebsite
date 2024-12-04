import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Reaction {
  [emoji: string]: number;
}

interface ReactionsState {
  [postId: number]: Reaction;
}

const initialState: ReactionsState = {};

const reactionsSlice = createSlice({
  name: 'reactions',
  initialState,
  reducers: {
    reactToPost(state, action: PayloadAction<{ postId: number; emoji: string }>) {
      const { postId, emoji } = action.payload;
      if (!state[postId]) state[postId] = {};
      if (!state[postId][emoji]) state[postId][emoji] = 0;
      state[postId][emoji]++;
    },
  },
});

export const { reactToPost } = reactionsSlice.actions;
export default reactionsSlice.reducer;
