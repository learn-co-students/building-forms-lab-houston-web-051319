import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';

class App extends Component {
  render() {
    // console.log(this.props,"app props")
    return (
      <div className="App">
        <BandsContainer />
      </div>
    );
  }
};

export default App;
