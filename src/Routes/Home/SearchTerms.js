import React from 'react';

const SearchTerms = ({ terms, removeFromSearchTerms, getRecipes }) => {
  const displayedTerms = terms.map(term => (
    <div className="term" key={Math.random()}>
      <p>
        {term} <span onClick={() => removeFromSearchTerms(term)}>{'   '}x</span>
      </p>
    </div>
  ));
  return (
    <div>
      <div className="title">
        <h2>Ingredients</h2>
      </div>
      <div className="search-terms">{displayedTerms}</div>
    </div>
  );
};

export default SearchTerms;
