import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import RecipeList from './components/RecipeList.jsx'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<RecipeList />} />
        <Route path='/add-recipe' element={<AddRecipeForm/>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  )
}

export default App
