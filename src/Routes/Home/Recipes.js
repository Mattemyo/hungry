import React from 'react';
import RecipeCard from './RecipeCard';
import Spinner from '../../components/Spinner/Spinner';

const Recipes = ({ hits, isLoading }) => {
  const recipeCards = hits.map((hit: {}) => (
    <RecipeCard key={Math.random()} recipe={hit.recipe} />
  ));

  return (
    <div className="recipes">
      <div className="title">
        <h2>
          Recipes <span>{isLoading ? <Spinner /> : false}</span>
        </h2>
      </div>

      <div className="results">{recipeCards}</div>
    </div>
  );
};

export default Recipes;
