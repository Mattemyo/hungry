import React from 'react';

const Recipes = ({ recipes }) => {
  const displayedRecipes = recipes.map(recipe => {
    return <div key={Math.random()}>recipe</div>;
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
