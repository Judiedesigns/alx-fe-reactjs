import { useState, useEffect } from 'react'
import useRecipeStore from './recipeStore'
import { useParams } from 'react-router-dom';


const EditRecipeForm = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => String(recipe.id) === String(id))
    );
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState(recipe || { title: '', description: '' });

    useEffect(() => {
        if (recipe) {
        setForm(recipe);
        }
    }, [recipe]);

    const handleEdit = (event) => { 
        event.preventDefault();
        if (isEditing) {
            updateRecipe(recipe.id, form);
        }
        setIsEditing(!isEditing);
    }

    return (
        <>
            {isEditing ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                </div>
            )}
            <button onClick={handleEdit} style={{ marginRight: '20px', marginTop: '20px' }}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </>
    )
}

export default EditRecipeForm