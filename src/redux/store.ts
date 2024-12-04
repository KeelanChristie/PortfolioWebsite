import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './commentsSlice';
import reactionsReducer from './reactionsSlice';
import analyticsReducer from "./analyticsSlice";

const store = configureStore({
  reducer: {
    comments: commentsReducer,
    reactions: reactionsReducer,
    analytics: analyticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
