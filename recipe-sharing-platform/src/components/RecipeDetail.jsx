import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import { useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  useEffect(() => {
    if (!recipe) {
      console.error('Recipe not found');
    }
  }, [recipe]);

  return (
    <div>
        <div className="block float-start">
            <Link to="/" className="text-blue-500 hover:underline cursor-pointer">Back to home</Link>
        </div>
        <h1 className="text-2xl font-bold">{recipe.title}</h1>
        <p className="my-5">{recipe.summary}</p>
        <img src={recipe.image} alt={recipe.title} className="w-[540px] h-auto mx-auto shadow-md mb-4" />
        <h2>Ingredients:</h2>
        <ul >
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions:</h2>
        <ol className="max-w-3xl mx-auto ">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
    </div>
  );
}
export default RecipeDetail;