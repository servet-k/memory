import { configureStore } from '@reduxjs/toolkit';
import catReducer from "../features/catPicSlice";
import scoreReducer from "../features/scoreSlice";


export const store = configureStore({
  reducer: {
    cat: catReducer,
    score: scoreReducer,
  
  },
});
