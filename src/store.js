import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/Counterslice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
