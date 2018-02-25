import React from 'react';

const SearchTerms = ({
  terms,
  removeSearchTerm,
  removeAllSearchTerms,
  getRecipes
}) => {
  const displayedTerms = terms.map(term => (
    <div className="term" key={Math.random()}>
      <p>
        {term} <button onClick={() => removeSearchTerm(term)}>{'   '}x</button>
      </p>
    </div>
  ));
  return (
    <div>
      <div className="title">
        <h2>Ingredients</h2>
      </div>
      <div className="search-terms">{displayedTerms}</div>
      <div className="ingredient-buttons">
        <button onClick={removeAllSearchTerms}>Clear All</button>
        <button onClick={getRecipes}>
          Search{' '}
          <span role="img" aria-label="search">
            &#128269;
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchTerms;
