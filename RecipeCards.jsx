import React from 'react'
import {Link} from 'react-router-dom'

function RecipeCards({ recipe }) {

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} width="250" height="300"  />

        <h3>{recipe.name}</h3>

        <p>🍴 Cuisine:{recipe.cuisine}</p>

        <p>⭐ Rating:{recipe.rating}</p>

        <p>⏱️ Cook Time:{recipe.cookTimeMinutes} mins</p>

      <Link to={`/recipe/${recipe.id}`}>
          <button> View Recipe</button>
      </Link>
    </div>
  );
}

export default RecipeCards;