import React from 'react';

const SearchTerms = ({ terms }) => {
  const searchTerms = terms.map(term => <span>{term}</span>);
  return <div className="searchTerms">{searchTerms}</div>;
};

export default SearchTerms;
