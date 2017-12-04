import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import NavbarContainer from '../containers/navbarContainer';
import Sidebar from './sidebar';

class App extends Component {

  render() {
    return (
      <div>
          <Header />
          <NavbarContainer />
          <div className="row">
              <div className="span3">
                  <Sidebar />
              </div>
              <div className="span9">
                  {this.props.children}
              </div>
          </div>
      </div>
    );
  }
}


export default App;