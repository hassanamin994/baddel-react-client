import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import NavbarContainer from '../containers/navbarContainer';


class App extends Component {

  render() {
    return (
      <div>
          <Header />
          <NavbarContainer />
          {this.props.children}
      </div>
    );
  }
}


export default App;