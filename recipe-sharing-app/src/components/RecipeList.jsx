import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  const displayList = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <SearchBar />

      {displayList.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayList.map(recipe => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
          >
            <div>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;
