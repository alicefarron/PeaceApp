import { configureStore } from "@reduxjs/toolkit";
import { affirmationsModel } from "../../entities/affirmations";

export const store = configureStore({
  reducer: {
    affirmations: affirmationsModel.reducer,
  },
});