import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import Home from './pages/views/features/Home'
import SingleRecipe from './pages/views/features/SingleRecipe'
import ResercheadRecipes from './pages/views/features/ResercheadRecipes'
import SingleRecipeForSearch from './pages/views/features/SingleRecipeForSearch'
import Error from './pages/views/features/Error'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/researchedRecipes" element={<ResercheadRecipes/>}></Route>
          <Route path="recipes/:recipeId" element={<SingleRecipe />}></Route>
          <Route path="researchedRecipes/recipes/:recipeId" element={<SingleRecipeForSearch />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
