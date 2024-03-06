import { configureStore } from "@reduxjs/toolkit/react";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(
  //       loanApi.middleware,

  //     ),
});

export default store;

export type StoreRootState = ReturnType<typeof store.getState>;
