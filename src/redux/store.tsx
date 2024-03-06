import { configureStore } from "@reduxjs/toolkit/react";
import themeReducer from "./themeSlice";
import { pokemonApi } from "./pokemonApi";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default store;

export type StoreRootState = ReturnType<typeof store.getState>;
