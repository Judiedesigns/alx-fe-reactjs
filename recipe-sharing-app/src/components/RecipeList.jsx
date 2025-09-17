import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  const displayList = searchTerm ? filteredRecipes : recipes;

  const addFavorite = useRecipeStore(state => state.addFavorite);

  return (
    <div>
      <SearchBar />

      {displayList.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayList.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </Link>

            <button onClick={() => addFavorite(recipe.id)}>Add to favorite</button>
          </div>
        ))
      )}

      <Link to='/add-recipe'>Add new recipe</Link>

      <FavoritesList />

      <RecommendationsList />
    </div>
  );
};

export default RecipeList;
