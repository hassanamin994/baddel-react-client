import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/products';
import ProductDetails from '../components/productDetails';

class ProductDetailsContainer extends React.Component {

    componentWillMount() {
        const productId = this.props.params.id;

        this.props.fetchProduct(productId);
    }


    render() {
        return (
            <ProductDetails product={this.props.product} />  
        )
    }
}

const mapState = (state) => {
return {product: state.products.currentProduct};
}

export default connect(mapState, actions)(ProductDetailsContainer);