import React, { Component } from 'react';
import axios from 'axios';
import SearchTerms from './SearchTerms';
import SearchBar from './SearchBar';
import Recipes from './Recipes';
import './Home.css';

const apiKey = 'a4c96a92aa69348f8ced3c9141f42517';
const apiAppId = 'db2831de';

const getInitialState = () => ({
  searchBoxInput: '',
  searchTerms: [],
  hits: [],
  isLoading: false
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onInputChange = e => {
    this.setState({ searchBoxInput: e.target.value });
  };

  addSearchTerm = () => {
    const inputValue = this.state.searchBoxInput;
    const regex = /^[a-zA-Z]+$/;
    if (!inputValue || !regex.test(inputValue)) {
      this.setState({ searchBoxInput: '' });
      console.log('oops!');
      return false;
    }
    const arr = this.state.searchTerms;
    arr.push(inputValue);
    this.setState({ searchTerms: arr, searchBoxInput: '' });
  };
  removeSearchTerm = term => {
    this.setState({
      searchTerms: this.state.searchTerms.filter(el => el !== term)
    });
  };
  removeAllSearchTerms = () => {
    this.setState(getInitialState());
  };
  _handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.addSearchTerm();
    }
  };

  getRecipes = () => {
    this.setState({ hits: [], isLoading: true });
    axios
      .get(
        `https://api.edamam.com/search?q=${this.state.searchTerms.join(
          '%20'
        )}&app_id=${apiAppId}&app_key=${apiKey}`
      )
      .then((response: {}) => {
        this.setState({ hits: response.data.hits, isLoading: false });
        console.log(this.state.hits);
      });
  };

  render() {
    return (
      <div onKeyPress={this._handleKeyPress} className="page">
        <SearchBar
          onInputChange={this.onInputChange}
          addSearchTerm={this.addSearchTerm}
          inputValue={this.state.searchBoxInput}
        />
        <SearchTerms
          terms={this.state.searchTerms}
          removeSearchTerm={this.removeSearchTerm}
          getRecipes={this.getRecipes}
          removeAllSearchTerms={this.removeAllSearchTerms}
        />
        <Recipes hits={this.state.hits} isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default Home;
