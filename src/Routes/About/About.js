// @flow
import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="page">
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
