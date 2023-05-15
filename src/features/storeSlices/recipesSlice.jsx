import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    researchedRecipes: []
}

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addResearchRecipes: (state, action) => {
            state.researchedRecipes = action.payload
        }
    }
})

export default recipesSlice.reducer;

export const { addResearchRecipes } = recipesSlice.actions;