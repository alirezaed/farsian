import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slice/authenticationSlice";

export default configureStore({
  reducer: { auth: reducer },
});
