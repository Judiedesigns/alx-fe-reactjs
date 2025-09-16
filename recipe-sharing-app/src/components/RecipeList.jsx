import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar';

const RecipeList = () => {
const recipes = useRecipeStore(state => state.recipes);
const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
const searchTerm = useRecipeStore(state => state.searchTerm);  
const navigate = useNavigate();

const displayList = searchTerm ? filteredRecipes : recipes;

return (
    <div>
        <SearchBar />
        {displayList.length === 0 ? (
            <p>No recipes found.</p>
        ) : (
            displayList.map(recipe => (
                <div 
                    key={recipe.id} 
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                    style={{ cursor: 'pointer', marginBottom: '1rem' }}
                >
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))
        )}
    </div>
);
};
export default RecipeList