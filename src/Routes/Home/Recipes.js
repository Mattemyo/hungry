import React from 'react';
import RecipeCard from './RecipeCard';

const Recipes = ({ hits }) => {
  const recipeCards = hits.map((hit: {}) => (
    <RecipeCard key={Math.random()} recipe={hit.recipe} />
  ));

  return (
    <div className="recipes">
      <div className="title">
        <h2>Recipes</h2>
      </div>
      <div className="results">{recipeCards}</div>
    </div>
  );
};

export default Recipes;
