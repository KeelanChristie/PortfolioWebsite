import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Engagement {
  postId: number;
  views: number;
  reactions: { [emoji: string]: number }; // Track reactions by type (e.g., 👍, ❤️)
  comments: string[]; // Store an array of comments
}

interface AnalyticsState {
  [key: number]: Engagement; // Map postId to engagement data
}

const initialState: AnalyticsState = {};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    trackView: (state, action: PayloadAction<{ postId: number }>) => {
      const { postId } = action.payload;
      if (!state[postId]) {
        state[postId] = { postId, views: 0, reactions: {}, comments: [] };
      }
      state[postId].views += 1;
    },
    trackReaction: (state, action: PayloadAction<{ postId: number; emoji: string }>) => {
      const { postId, emoji } = action.payload;
      if (!state[postId]) {
        state[postId] = { postId, views: 0, reactions: {}, comments: [] };
      }
      if (!state[postId].reactions[emoji]) {
        state[postId].reactions[emoji] = 0;
      }
      state[postId].reactions[emoji] += 1;
    },
    trackComment: (state, action: PayloadAction<{ postId: number; comment: string }>) => {
      const { postId, comment } = action.payload;
      if (!state[postId]) {
        state[postId] = { postId, views: 0, reactions: {}, comments: [] };
      }
      state[postId].comments.push(comment);
    },
  },
});

export const { trackView, trackReaction, trackComment } = analyticsSlice.actions;

export default analyticsSlice.reducer;
