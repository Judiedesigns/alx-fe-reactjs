import useRecipeStore from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => String(recipe.id) === String(id))
  );
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/');
  };

  return (
    <div>
      <EditRecipeForm />
      {/* <button onClick={handleDelete}>Delete</button> */}
      <DeleteRecipeButton onDelete={handleDelete} />
    </div>
  );
};

export default RecipeDetails;
