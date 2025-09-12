import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';


const DeleteRecipeButton = () => {
      const { id } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => String(recipe.id) === String(id))
    );
    const navigate = useNavigate();
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
        deleteRecipe(recipe.id);
        navigate('/');
    };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;