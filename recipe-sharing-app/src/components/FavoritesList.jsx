import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favoritesIds = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  const favorites = favoritesIds.map(id =>
    recipes.find(recipe => recipe.id === id)
  );

  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        recipe && (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <button onClick={() => removeFavorite(recipe.id)}>Remove from favorite</button>
          </div>
        )
      ))}
    </div>
  );
};

export default FavoritesList;
