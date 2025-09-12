import './App.css'
import Home from './components/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails.jsx'
import EditRecipeForm from './components/EditRecipeForm.jsx'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      {/* <Route path='/recipe/edit/:id' element={<EditRecipeForm />}/> */}
    </Routes>
  )
}

export default App
