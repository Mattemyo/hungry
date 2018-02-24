// @flow
import React, { Component } from 'react';
import SearchTerms from './SearchTerms';
import SearchBar from './SearchBar';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBoxInput: '',
      searchTerms: []
    };
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  addToSearchTerms = () => {
    const arr = this.state.searchTerms;
    arr.push(this.state.searchBoxInput);
    this.setState({ searchTerms: arr });
  };

  render() {
    return (
      <div className="page">
        <h2>Home</h2>
        <SearchBar
          onInputChange={this.onInputChange}
          addToSearchTerms={this.addToSearchTerms}
        />
        <SearchTerms terms={this.state.searchTerms} />
      </div>
    );
  }
}

export default Home;
