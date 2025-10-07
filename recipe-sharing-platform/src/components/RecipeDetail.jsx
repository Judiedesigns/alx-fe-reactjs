import { Link, useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  return (
    <div>
        <div className="block float-start">
            <Link to="/" className="text-blue-500 hover:underline cursor-pointer">Back to home</Link>
        </div>
        <p>Recipe Detail for ID: {id}</p>
        <h1>{recipe.title}</h1>
        <p>{recipe.summary}</p>
        <img src={recipe.image} alt={recipe.title} />
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions:</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
    </div>
  );
}
export default RecipeDetail;