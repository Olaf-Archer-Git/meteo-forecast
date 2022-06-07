import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import weatherSlice from "./features/weatherSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    weather: weatherSlice,    
  },
});

export default store;
