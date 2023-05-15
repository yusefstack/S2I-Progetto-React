import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./features/storeSlices/recipesSlice";

export const store = configureStore({
    reducer: {
        recipes: recipesReducer,
    }
});