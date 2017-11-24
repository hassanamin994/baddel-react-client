import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
          <Header />
          {this.props.children}
      </div>
    );
  }
}


export default connect(null, { fetchCategories })(App);