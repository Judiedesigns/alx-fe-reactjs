import useRecipeStore from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => String(recipe.id) === String(id))
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <EditRecipeForm />
      <DeleteRecipeButton />
    </div>
  );
};

export default RecipeDetails;
