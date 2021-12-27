import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieSlice from "./movie/movieSlice";
import userReducer from "./userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
