import { useState,useEffect, use } from "react";
import data from "../data.json";
const Homepage = () => {
  const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     setRecipes(data);
//   }, []);

    useEffect(() => {
        fetch('data.json')
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold">Recipe Sharing Platform</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {data.map((recipe) => (
          <div key={recipe.id} className="border p-4 mb-4 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <img className="w-[400px] mx-auto" src={recipe.image} alt={recipe.title} />
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Homepage;
