import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import Home from './components/Home'
import SingleRecipe from './components/SingleRecipe'
import ResercheadRecipes from './components/resercheadRecipes'
import SingleRecipeForSearch from './components/SingleRecipeForSearch'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/researchedRecipes" element={<ResercheadRecipes/>}></Route>
          <Route path="recipes/:recipeId" element={<SingleRecipe />}></Route>
          <Route path="researchedRecipes/recipes/:recipeId" element={<SingleRecipeForSearch />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
