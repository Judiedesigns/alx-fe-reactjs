import { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (title.trim() === "") newErrors.title = "Recipe title is required.";
        if (ingredients.trim() === "") newErrors.ingredients = "Ingredients are required.";
        if (steps.trim() === "") newErrors.steps = "Preparation steps are required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) return;

        alert('Form submitted!');
    };

    return (
        <form className="flex flex-col gap-4 md:max-w-lg w-full mx-auto border p-2 rounded-lg shadow:md" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="mb-2 text-left font-bold">Recipe Title: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    placeholder="Enter recipe title" 
                    className="border p-2 border-black outline-none focus:border-red-600" 
                    name='title' 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>
            <div className="flex flex-col">
                <label className="text-left mb-2 font-bold">Ingredients:</label>
                <textarea 
                    placeholder="Enter Ingredients" 
                    className="border p-2 border-black outline-none focus:border-red-600 resize-none" 
                    name='ingredients' 
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
                {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
            </div>
            <div className="flex flex-col">
                <label className="text-left mb-2 font-bold">Preparation Steps:</label>
                <textarea 
                    placeholder="Enter Preparation Steps" 
                    className="border p-2 border-black outline-none focus:border-red-600 resize-none" 
                    name='steps' 
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                ></textarea>
                {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-fit mx-auto hover:bg-blue-800">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;   