import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom'

const RecipeList = () => {
const recipes = useRecipeStore(state => state.recipes);
const navigate = useNavigate();

return (
    <div>
        {recipes.map(recipe => (
            <div key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)} >
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
            </div>
        ))}
    </div>
);
};
export default RecipeList