import React from 'react';

const RecipeCard = ({ recipe }) => {
  const ingredients = recipe.ingredientLines.map(ingredient => (
    <li key={Math.random()}>{ingredient}</li>
  ));

  return (
    <div className="recipe-card">
      <div className="recipe-name">
        <h3>{recipe.label}</h3>
      </div>
      <div className="recipe-image">
        <img
          alt={recipe.label}
          src={recipe.image}
          style={{ borderRadius: '5px' }}
        />
      </div>
      <div className="ingredients">
        <ul>{ingredients}</ul>
      </div>
      <div>
        <a target="_blank" href={recipe.url}>
          See full recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
