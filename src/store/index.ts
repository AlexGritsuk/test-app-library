import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookReducer";
import genresReducer from "./genres";
import authorsReducer from "./authors";

const store = configureStore({
  reducer: {
    books: booksReducer,
    genres: genresReducer,
    authors: authorsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
