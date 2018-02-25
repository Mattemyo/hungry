import React from 'react';

const Recipes = ({ hits }) => {
  const displayedRecipes = hits.map((hit: {}) => {
    const ingredients = hit.recipe.ingredientLines.map(ingredient => (
      <li key={Math.random()}>{ingredient}</li>
    ));

    return (
      <div className="recipe-card" key={Math.random()}>
        <div key={Math.random()} className="recipe-name">
          <h3 key={Math.random()}>{hit.recipe.label}</h3>
        </div>
        <div className="recipe-image" key={Math.random()}>
          <img
            key={Math.random()}
            alt={hit.recipe.label}
            src={hit.recipe.image}
            style={{ borderRadius: '5px' }}
          />
        </div>
        <div key={Math.random()} className="ingredients">
          <ul key={Math.random()}>{ingredients}</ul>
        </div>
        <div key={Math.random()}>
          <a target="_blank" key={Math.random()} href={hit.recipe.url}>
            See full recipe
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="recipes">
      <div className="title">
        <h2>Recipes</h2>
      </div>
      <div className="results">{displayedRecipes}</div>
    </div>
  );
};

export default Recipes;
