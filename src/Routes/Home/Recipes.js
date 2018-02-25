import React from 'react';
import RecipeCard from './RecipeCard';

const Recipes = ({ hits }) => {
  const displayedRecipes = hits.map((hit: {}) => (
    <RecipeCard key={Math.random()} recipe={hit.recipe} />
  ));

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
