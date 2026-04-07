import { configureStore } from "@reduxjs/toolkit";
import { limitlessApi } from "../api/limitless/limitlessapi";

export const store = configureStore({
  reducer: {
    [limitlessApi.reducerPath]: limitlessApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(limitlessApi.middleware),
});
