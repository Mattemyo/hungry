import React from 'react';

const Recipes = ({ recipes }) => {
  const displayedRecipes = recipes.map(recipe => {
    return <div>recipe</div>;
  });

  return (
    <div className="recipes">
      <h3>Recipes</h3>
      <div>{displayedRecipes}</div>
    </div>
  );
};

export default Recipes;
