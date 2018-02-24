// @flow
import React, { Component } from 'react';
import SearchTerms from './SearchTerms';
import SearchBar from './SearchBar';
import Recipes from './Recipes';
import './Home.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBoxInput: '',
      searchTerms: [],
      recipes: []
    };
  }

  onInputChange = e => {
    this.setState({ searchBoxInput: e.target.value });
  };

  addToSearchTerms = () => {
    const inputValue = this.state.searchBoxInput;
    const regex = /^[a-zA-Z]+$/;
    if (!inputValue || !regex.test(inputValue)) {
      return false;
    }
    const arr = this.state.searchTerms;
    arr.push(inputValue);
    this.setState({ searchTerms: arr, searchBoxInput: '' });
  };
  removeFromSearchTerms = term => {
    this.setState({
      searchTerms: this.state.searchTerms.filter(el => el !== term)
    });
  };
  _handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.addToSearchTerms();
    }
  };

  getRecipes = () => {};

  render() {
    return (
      <div onKeyPress={this._handleKeyPress} className="page">
        <SearchBar
          onInputChange={this.onInputChange}
          addToSearchTerms={this.addToSearchTerms}
          inputValue={this.state.searchBoxInput}
        />
        <SearchTerms
          terms={this.state.searchTerms}
          removeFromSearchTerms={this.removeFromSearchTerms}
          getRecipes={this.getRecipes}
        />
        <Recipes recipes={this.recipes} />
      </div>
    );
  }
}

export default Home;
