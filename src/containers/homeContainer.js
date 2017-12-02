import React from 'react';
import Home from '../components/home';
import { connect } from 'react-redux';
import * as actions from '../actions/products';


class HomeContainer extends React.Component {

    componentWillMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <Home products={ this.props.products.products } />
        )
    }
}

function mapStateToProps(state) {
    return { products: state.products };
}

export default connect(mapStateToProps, actions)(HomeContainer) ;