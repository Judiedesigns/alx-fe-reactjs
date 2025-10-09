import { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [preparationSteps, setPreparationSteps] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.trim() === "") {
            alert("Enter a title or I deck you.");
            return;
        }

        if (ingredients.trim() === "") {
            alert("Enter ingredients or I deck you.");
            return;
        }
        
        if (preparationSteps.trim() === "") {
            alert("Enter preparation steps or I deck you.");
            return;
        }

        alert('Form submitted!');
    };

    return (
        <form className="flex flex-col gap-4 max-w-lg mx-auto">
            <div>
                <label className="block mb-2 font-bold">Recipe Title: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    placeholder="Enter recipe title" 
                    className="border p-2 border-black outline-none focus:border-red-600" 
                    name='title' 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label className="block mb-2 font-bold">Ingredients:</label>
                <textarea 
                    placeholder="Enter Ingredients" 
                    className="border p-2 border-black outline-none focus:border-red-600 resize-none" 
                    name='ingredients' 
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label className="block mb-2 font-bold">Preparation Steps:</label>
                <textarea 
                    placeholder="Enter Preparation Steps" 
                    className="border p-2 border-black outline-none focus:border-red-600 resize-none" 
                    name='preparationSteps' 
                    value={preparationSteps}
                    onChange={(e) => setPreparationSteps(e.target.value)}
                ></textarea>
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded w-fit mx-auto hover:bg-blue-800">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;   