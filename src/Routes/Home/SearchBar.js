import React from 'react';

const SearchBar = ({ onInputChange, addToSearchTerms, inputValue }) => {
  return (
    <div className="search-bar">
      <div>
        <input
          value={inputValue}
          placeholder="Pasta..."
          type="text"
          onChange={onInputChange}
          maxLength="15"
        />
        <button onClick={addToSearchTerms}>Add Ingredient</button>
      </div>
    </div>
  );
};

export default SearchBar;
