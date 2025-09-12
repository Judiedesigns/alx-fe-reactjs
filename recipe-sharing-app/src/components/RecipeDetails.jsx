import useRecipeStore from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => String(recipe.id) === String(id))
  );

  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(recipe || { title: '', description: '' });

  useEffect(() => {
    if (recipe) {
      setForm(recipe);
    }
  }, [recipe]);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const handleEdit = () => {
    if (isEditing) {
      updateRecipe(recipe.id, form);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/');
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </>
      )}

      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
