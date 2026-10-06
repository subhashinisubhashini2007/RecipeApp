import React from 'react'

function Favorites() {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="recipe-details">
      <h1>❤️ Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div>
          {favorites.map((recipe) => (
            <div key={recipe.id}>
              <img
                src={recipe.image}
                alt={recipe.name}
                width="200"
              />

              <h3>{recipe.name}</h3>

              <p>🍴 {recipe.cuisine}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;