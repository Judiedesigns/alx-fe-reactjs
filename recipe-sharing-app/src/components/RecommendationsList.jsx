import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
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

export default RecommendationsList;