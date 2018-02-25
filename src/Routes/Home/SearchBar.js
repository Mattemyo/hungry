import React from 'react';

const SearchBar = ({ onInputChange, addSearchTerm, inputValue }) => {
  return (
    <div className="search-bar">
      <div>
        <input
          value={inputValue}
          placeholder="Sugar..."
          type="text"
          onChange={onInputChange}
          maxLength="15"
        />
        <button onClick={addSearchTerm}>Add Ingredient</button>
      </div>
    </div>
  );
};

export default SearchBar;
