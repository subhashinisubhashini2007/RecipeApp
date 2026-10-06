import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function RecipeDetails() {
  const { id } = useParams();
  const url = `https://dummyjson.com/recipes/${id}`;
  const { data, loading, error } = useFetch(url);

  console.log("Recipe ID:", id);
  console.log("URL:",url);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  
  if (!data) {
    return <p>No recipe found.</p>;
  }

  return (
    <div className="recipe-details">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <img src={data.image} alt={data.name} width="400" />

      <p> Cuisine: {data.cuisine}</p>
      <p> Rating : {data.rating}</p>
      <p> Preparation Time: {data.prepTimeMinutes} minutes</p>
      <p> Cooking Time: {data.cookTimeMinutes}</p>
      <p> Servings: {data.servings}</p>

      <h2>Ingredients</h2>
      <ul>
        {
          data.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        }
      </ul>

      <h2> Cooking Instructions </h2>
      <ol>
        {
            data.instructions.map((step, index) => (
            <li key={index}>{index + 1}. {step}</li>
            ))
        }
      </ol>
    </div>
  );
}

export default RecipeDetails;